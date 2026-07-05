"use client";

import { useMemo, useState } from "react";

function currency(value: number) {
  return new Intl.NumberFormat("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function AutomationRoiCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyValue, setHourlyValue] = useState(40);
  const [softwareCost, setSoftwareCost] = useState(49);
  const [users, setUsers] = useState(1);

  const result = useMemo(() => {
    const monthlyHoursSaved = Math.max(0, hoursPerWeek) * Math.max(1, users) * 4.33;
    const monthlyValueSaved = monthlyHoursSaved * Math.max(0, hourlyValue);
    const netMonthlySavings = monthlyValueSaved - Math.max(0, softwareCost);
    const yearlySavings = netMonthlySavings * 12;

    return { monthlyHoursSaved, monthlyValueSaved, netMonthlySavings, yearlySavings };
  }, [hourlyValue, hoursPerWeek, softwareCost, users]);

  const fields = [
    { id: "hours", label: "Hours saved per week", value: hoursPerWeek, setter: setHoursPerWeek, min: 0 },
    { id: "value", label: "Hourly value", value: hourlyValue, setter: setHourlyValue, min: 0 },
    { id: "cost", label: "Monthly software cost", value: softwareCost, setter: setSoftwareCost, min: 0 },
    { id: "users", label: "Employees or users", value: users, setter: setUsers, min: 1 }
  ];

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} htmlFor={field.id} className="font-bold text-[#17211d]">
            {field.label}
            <input
              id={field.id}
              type="number"
              min={field.min}
              step="0.01"
              value={field.value}
              onChange={(event) => field.setter(Number(event.target.value))}
              className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <p className="text-sm font-bold text-[#5e6f68]">Monthly hours saved</p>
          <p className="mt-2 text-3xl font-black">{result.monthlyHoursSaved.toFixed(1)}</p>
        </div>
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <p className="text-sm font-bold text-[#5e6f68]">Monthly value saved</p>
          <p className="mt-2 text-3xl font-black">{currency(result.monthlyValueSaved)}</p>
        </div>
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <p className="text-sm font-bold text-[#5e6f68]">Net monthly savings</p>
          <p className="mt-2 text-3xl font-black">{currency(result.netMonthlySavings)}</p>
        </div>
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <p className="text-sm font-bold text-[#5e6f68]">Estimated yearly savings</p>
          <p className="mt-2 text-3xl font-black">{currency(result.yearlySavings)}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#5e6f68]">
        This estimate uses 4.33 weeks per month. Treat it as a planning guide, then compare it with actual workflow data.
      </p>
    </section>
  );
}
