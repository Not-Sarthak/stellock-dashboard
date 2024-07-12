import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";
import { Input } from "@/components/input";

export default function Users() {
  return (
    <div className="space-y-6 p-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">User snapshot</h2>
        <div className="flex items-center space-x-4">
          <Select>
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
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Active users{" "}
              <span className="text-muted-foreground text-sm">(past day)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              New users{" "}
              <span className="text-muted-foreground text-sm">(past day)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Total users{" "}
              <span className="text-muted-foreground text-sm">(all time)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Login methods{" "}
              <span className="text-muted-foreground text-sm">(all time)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
          </CardContent>
        </Card>
        <Card className="col-span-1 p-4 md:col-span-2 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Wallet breakdown{" "}
              <span className="text-muted-foreground text-sm">(all time)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">Embedded</div>
            <div className="text-muted-foreground text-sm">0 (0%)</div>
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className="text-2xl font-bold">All users</h2>
        <div className="mt-4">
          <Input
            type="search"
            placeholder="Search by DID, email, wallet, social or phone"
            className="w-full"
          />
        </div>
        <div className="mt-6 flex flex-col items-center justify-center rounded-lg border p-10">
          <FrownIcon className="text-muted-foreground h-16 w-16 text-white/60" />
          <h3 className="mt-4 text-xl font-semibold text-white/60">
            No results found
          </h3>
          <p className="text-muted-foreground mt-2 text-center text-white/60">
            We couldn't find the user you searched for. Please try again with
            one of their other accounts.
          </p>
        </div>
      </div>
    </div>
  );
}

function FrownIcon(props: any) {
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

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
