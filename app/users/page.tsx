"use client";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Input } from "@/components/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/table";

const timeframeLabels: Record<string, string> = {
  "past-day": "past day",
  "past-week": "past week",
  "past-month": "past month",
};

const Users: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>("past-day");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<any>({ key: "name", order: "asc" });
  const [userData, setUserData] = useState([]);

  const handleTimeframeChange = (value: string) => {
    setTimeframe(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/utils/userData.json");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const users = useMemo(
    () =>
      userData
        .filter((user:any) => {
          const searchValue = search.toLowerCase();
          return (
            user.name.toLowerCase().includes(searchValue) ||
            user.email.toLowerCase().includes(searchValue)
          );
        })
        .sort((a, b) => {
          if (sort.order === "asc") {
            return a[sort.key] > b[sort.key] ? 1 : -1;
          } else {
            return a[sort.key] < b[sort.key] ? 1 : -1;
          }
        }),
    [search, sort, userData],
  );

  return (
    <div className="space-y-6 p-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User snapshot</h2>
        <div className="flex items-center space-x-4">
          <Select onValueChange={handleTimeframeChange}>
            <SelectTrigger id="timeframe">
              <SelectValue placeholder="Past day" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="past-day">Past day</SelectItem>
              <SelectItem value="past-week">Past week</SelectItem>
              <SelectItem value="past-month">Past month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-none bg-[#0f0f0f] p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Active users{" "}
              <span className="text-sm text-gray-400">
                ({timeframeLabels[timeframe]})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card className="border-none bg-[#0f0f0f] p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              New users{" "}
              <span className="text-sm text-gray-400">
                ({timeframeLabels[timeframe]})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card className="border-none bg-[#0f0f0f] p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Total users{" "}
              <span className="text-sm text-gray-400">(all time)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card className="border-none bg-[#0f0f0f] p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Login methods{" "}
              <span className="text-sm text-gray-400">(all time)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
      </div>
      <Card className="border-none bg-[#0f0f0f] p-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">All users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="search"
              placeholder="Search by name or email"
              className="w-full border border-gray-600 bg-black text-white placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {users.length > 0 ? (
            <Table className="w-full rounded-xl text-left text-gray-400">
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="cursor-pointer border-b border-gray-600"
                    onClick={() =>
                      setSort({
                        key: "id",
                        order:
                          sort.key === "id"
                            ? sort.order === "asc"
                              ? "desc"
                              : "asc"
                            : "asc",
                      })
                    }
                  >
                    ID
                    {sort.key === "id" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="cursor-pointer border-b border-gray-600"
                    onClick={() =>
                      setSort({
                        key: "name",
                        order:
                          sort.key === "name"
                            ? sort.order === "asc"
                              ? "desc"
                              : "asc"
                            : "asc",
                      })
                    }
                  >
                    Name
                    {sort.key === "name" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="cursor-pointer border-b border-gray-600"
                    onClick={() =>
                      setSort({
                        key: "email",
                        order:
                          sort.key === "email"
                            ? sort.order === "asc"
                              ? "desc"
                              : "asc"
                            : "asc",
                      })
                    }
                  >
                    Email
                    {sort.key === "email" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="cursor-pointer border-b border-gray-600"
                    onClick={() =>
                      setSort({
                        key: "publicKey",
                        order:
                          sort.key === "publicKey"
                            ? sort.order === "asc"
                              ? "desc"
                              : "asc"
                            : "asc",
                      })
                    }
                  >
                    Public Key
                    {sort.key === "publicKey" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="cursor-pointer border-b border-gray-600"
                    onClick={() =>
                      setSort({
                        key: "privateKey",
                        order:
                          sort.key === "privateKey"
                            ? sort.order === "asc"
                              ? "desc"
                              : "asc"
                            : "asc",
                      })
                    }
                  >
                    Private Key [One-Third]
                    {sort.key === "privateKey" && (
                      <span className="ml-1">
                        {sort.order === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user: any) => (
                  <TableRow
                    key={user.id}
                    className="my-2 border-b border-gray-600 hover:bg-black"
                  >
                    <TableCell className="font-medium text-white">
                      {user.id}
                    </TableCell>
                    <TableCell className="font-medium text-white">
                      {user.name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.publicKey}</TableCell>
                    <TableCell>{user.privateKey}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-600 p-10">
              <FrownIcon className="h-16 w-16 text-gray-400" />
              <h3 className="mt-4 text-xl font-semibold text-gray-400">
                No results found
              </h3>
              <p className="mt-2 text-center text-gray-400">
                We couldn&apos;t find the user you searched for. Please try
                again with another name or email.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

function FrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

export default Users;
