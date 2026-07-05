"use client";

import { useMemo, useState } from "react";

type LineItem = {
  id: number;
  description: string;
  quantity: number;
  price: number;
};

function money(value: number) {
  return new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(value || 0);
}

export function InvoiceGeneratorTool() {
  const [businessName, setBusinessName] = useState("Workflow Tools Studio");
  const [businessEmail, setBusinessEmail] = useState("hello@example.com");
  const [clientName, setClientName] = useState("Client Company");
  const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState("");
  const [taxPercent, setTaxPercent] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: "Automation setup", quantity: 1, price: 250 },
    { id: 2, description: "Workflow documentation", quantity: 2, price: 75 }
  ]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + Math.max(0, item.quantity) * Math.max(0, item.price), 0);
    const discountAmount = Math.min(Math.max(0, discount), subtotal);
    const taxableAmount = subtotal - discountAmount;
    const taxAmount = taxableAmount * (Math.max(0, taxPercent) / 100);
    const total = taxableAmount + taxAmount;

    return { subtotal, discountAmount, taxAmount, total };
  }, [discount, items, taxPercent]);

  function updateItem(id: number, patch: Partial<LineItem>) {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function addItem() {
    setItems((current) => [
      ...current,
      { id: Date.now(), description: "", quantity: 1, price: 0 }
    ]);
  }

  function removeItem(id: number) {
    setItems((current) => (current.length > 1 ? current.filter((item) => item.id !== id) : current));
  }

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="font-bold">
          Business name
          <input value={businessName} onChange={(event) => setBusinessName(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Business email optional
          <input value={businessEmail} onChange={(event) => setBusinessEmail(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Client name
          <input value={clientName} onChange={(event) => setClientName(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Invoice number
          <input value={invoiceNumber} onChange={(event) => setInvoiceNumber(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Invoice date
          <input type="date" value={invoiceDate} onChange={(event) => setInvoiceDate(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Due date
          <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#dce5e0] text-left">
              <th className="py-2 pr-3">Description</th>
              <th className="px-3 py-2">Qty</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Amount</th>
              <th className="py-2 pl-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-[#eef2ef]">
                <td className="py-3 pr-3">
                  <label className="sr-only" htmlFor={`description-${item.id}`}>Line item description</label>
                  <input id={`description-${item.id}`} value={item.description} onChange={(event) => updateItem(item.id, { description: event.target.value })} className="w-full rounded-md border border-[#cbd8d2] px-3 py-2" />
                </td>
                <td className="px-3 py-3">
                  <label className="sr-only" htmlFor={`quantity-${item.id}`}>Quantity</label>
                  <input id={`quantity-${item.id}`} type="number" min="0" value={item.quantity} onChange={(event) => updateItem(item.id, { quantity: Number(event.target.value) })} className="w-24 rounded-md border border-[#cbd8d2] px-3 py-2" />
                </td>
                <td className="px-3 py-3">
                  <label className="sr-only" htmlFor={`price-${item.id}`}>Price</label>
                  <input id={`price-${item.id}`} type="number" min="0" step="0.01" value={item.price} onChange={(event) => updateItem(item.id, { price: Number(event.target.value) })} className="w-28 rounded-md border border-[#cbd8d2] px-3 py-2" />
                </td>
                <td className="px-3 py-3 font-bold">{money(item.quantity * item.price)}</td>
                <td className="py-3 pl-3">
                  <button type="button" onClick={() => removeItem(item.id)} disabled={items.length === 1} className="rounded-md border border-[#dce5e0] px-3 py-2 font-bold text-[#40524c] disabled:opacity-50">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={addItem} className="mt-4 rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d4f42]">
        Add item
      </button>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="font-bold">
          Tax percentage optional
          <input type="number" min="0" step="0.01" value={taxPercent} onChange={(event) => setTaxPercent(Number(event.target.value))} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Discount amount optional
          <input type="number" min="0" step="0.01" value={discount} onChange={(event) => setDiscount(Number(event.target.value))} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
      </div>

      <div className="mt-8 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-5 print:bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black">Invoice</h2>
            <p className="mt-2 font-bold">{businessName || "Business name"}</p>
            {businessEmail ? <p className="text-sm text-[#5e6f68]">{businessEmail}</p> : null}
          </div>
          <button type="button" onClick={() => window.print()} className="rounded-md border border-[#16705a] px-4 py-2 text-sm font-bold text-[#0d4f42] print:hidden">
            Print invoice
          </button>
        </div>
        <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <p className="font-bold">Bill to</p>
            <p className="mt-1">{clientName || "Client name"}</p>
          </div>
          <div className="md:text-right">
            <p><strong>Invoice:</strong> {invoiceNumber || "INV-001"}</p>
            <p><strong>Date:</strong> {invoiceDate || "Not set"}</p>
            <p><strong>Due:</strong> {dueDate || "Not set"}</p>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#dce5e0] text-left">
                <th className="py-2">Description</th>
                <th className="py-2 text-right">Qty</th>
                <th className="py-2 text-right">Price</th>
                <th className="py-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-[#e9efec]">
                  <td className="py-3">{item.description || "Line item"}</td>
                  <td className="py-3 text-right">{item.quantity}</td>
                  <td className="py-3 text-right">{money(item.price)}</td>
                  <td className="py-3 text-right">{money(item.quantity * item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <dl className="ml-auto mt-5 max-w-sm space-y-2 text-sm">
          <div className="flex justify-between gap-4"><dt>Subtotal</dt><dd>{money(totals.subtotal)}</dd></div>
          <div className="flex justify-between gap-4"><dt>Discount</dt><dd>-{money(totals.discountAmount)}</dd></div>
          <div className="flex justify-between gap-4"><dt>Tax</dt><dd>{money(totals.taxAmount)}</dd></div>
          <div className="flex justify-between gap-4 border-t border-[#dce5e0] pt-2 text-lg font-black"><dt>Total</dt><dd>{money(totals.total)}</dd></div>
        </dl>
      </div>
    </section>
  );
}
