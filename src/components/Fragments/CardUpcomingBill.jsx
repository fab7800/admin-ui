import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Elements/Card.jsx";
import { CalendarIcon } from "../Icons.jsx";
import { fallbackBills } from "../../utils/financialData.js";

function CardUpcomingBill({ bills = fallbackBills, isLoading = false }) {
  const displayBills = bills.length > 0 ? bills : fallbackBills;

  return (
    <Card link="/bill" title="Upcoming Bill">
      {isLoading ? (
        <div className="flex min-h-52 flex-col items-center justify-center text-primary">
          <CircularProgress color="inherit" size={44} />
          <p className="mt-4 text-sm font-semibold">Loading Bills</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {displayBills.map((bill) => (
            <div
              className="flex items-center justify-between gap-4 rounded border border-slate-100 bg-slate-50 p-4"
              key={bill.id ?? bill.name}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-white text-slate-500">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-900">
                    {bill.name}
                  </p>
                  <p className="mt-1 truncate text-sm text-slate-500">
                    Last charge - {bill.date}
                  </p>
                </div>
              </div>
              <p className="shrink-0 rounded bg-white px-3 py-2 text-sm font-bold text-slate-900">
                {bill.amount}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default CardUpcomingBill;
