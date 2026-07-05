"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function fallback(value: string, text: string) {
  return value.trim() || text;
}

export function AiPromptGeneratorTool() {
  const [task, setTask] = useState("Summarize customer feedback and identify the top improvement themes");
  const [role, setRole] = useState("operations analyst");
  const [context, setContext] = useState("The feedback comes from support tickets, survey comments, and sales call notes.");
  const [format, setFormat] = useState("bullet list with short explanations");
  const [tone, setTone] = useState("clear and practical");
  const [constraints, setConstraints] = useState("Do not invent data. Flag unclear or missing information.");

  const generated = useMemo(() => {
    const cleanTask = fallback(task, "complete the task");
    const cleanRole = fallback(role, "helpful assistant");
    const cleanContext = fallback(context, "use the information provided by the user");
    const cleanFormat = fallback(format, "structured response");
    const cleanTone = fallback(tone, "clear");
    const cleanConstraints = fallback(constraints, "be accurate and explain assumptions");

    const prompt = `Act as a ${cleanRole}.\n\nTask: ${cleanTask}\n\nContext: ${cleanContext}\n\nOutput format: ${cleanFormat}\n\nTone: ${cleanTone}\n\nConstraints: ${cleanConstraints}\n\nBefore answering, identify any missing information that would materially change the result. If the task can be completed with the available context, provide the answer directly.`;
    const variations = [
      `You are a ${cleanRole}. Help me ${cleanTask}. Use this context: ${cleanContext}. Respond as ${cleanFormat}. Keep the tone ${cleanTone}. Follow these constraints: ${cleanConstraints}.`,
      `I need a ${cleanTone} ${cleanFormat} for this goal: ${cleanTask}. Background: ${cleanContext}. Work from the perspective of a ${cleanRole}, and do not ignore these constraints: ${cleanConstraints}.`,
      `Review the context below and complete the task.\nRole: ${cleanRole}\nGoal: ${cleanTask}\nContext: ${cleanContext}\nFormat: ${cleanFormat}\nRules: ${cleanConstraints}`
    ];
    const checklist = [
      "State the task in one clear sentence.",
      "Name the role or viewpoint the response should use.",
      "Add enough context for the model to avoid guessing.",
      "Specify the output format before asking for the answer.",
      "Include constraints, exclusions, or quality checks.",
      "Ask the model to flag missing information when accuracy matters."
    ];

    return { prompt, variations, checklist };
  }, [constraints, context, format, role, task, tone]);

  function clear() {
    setTask("");
    setRole("");
    setContext("");
    setFormat("");
    setTone("");
    setConstraints("");
  }

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="font-bold">
          Task or goal
          <textarea value={task} onChange={(event) => setTask(event.target.value)} rows={3} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Role or persona
          <input value={role} onChange={(event) => setRole(event.target.value)} placeholder="marketing strategist, editor, analyst" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Context
          <textarea value={context} onChange={(event) => setContext(event.target.value)} rows={4} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Output format
          <input value={format} onChange={(event) => setFormat(event.target.value)} placeholder="table, checklist, JSON, outline" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Tone
          <input value={tone} onChange={(event) => setTone(event.target.value)} placeholder="friendly, concise, technical" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Constraints
          <textarea value={constraints} onChange={(event) => setConstraints(event.target.value)} rows={4} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <CopyButton value={generated.prompt} label="Copy improved prompt" />
        <button type="button" onClick={clear} className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold text-[#40524c] hover:bg-[#f8faf9]">
          Clear
        </button>
      </div>

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <h2 className="font-bold">Improved prompt</h2>
        <pre className="mt-3 whitespace-pre-wrap rounded-md bg-white p-3 text-sm leading-6 text-[#24342f]">{generated.prompt}</pre>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-[#dce5e0] p-4">
          <h2 className="font-bold">Prompt variations</h2>
          <div className="mt-3 grid gap-3">
            {generated.variations.map((variation, index) => (
              <div key={variation} className="rounded-md bg-[#f8faf9] p-3">
                <p className="text-sm font-bold">Variation {index + 1}</p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#40524c]">{variation}</p>
                <div className="mt-2">
                  <CopyButton value={variation} label="Copy" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#dce5e0] p-4">
          <h2 className="font-bold">Prompt improvement checklist</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#40524c]">
            {generated.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
