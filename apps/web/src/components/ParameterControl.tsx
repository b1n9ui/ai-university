import {tr, localizeNode} from "../i18n";
import { useEffect, useId, useRef, useState } from "react";
import {
  parseParameter,
  parameterKeyValue,
} from "../../../../packages/visuals/parameter-input.mjs";
import { MathText, plainMathText } from "./MathText";
const format = (v: number) => String(v);
export function ParameterControl({
  label,
  value,
  min,
  max,
  step = 0.01,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
}) {
  const [draft, setDraft] = useState(format(value)),
    [error, setError] = useState("");
  const id = useId(),
    editing = useRef(false);
  useEffect(() => {
    if (!editing.current) setDraft(format(value));
    setError("");
  }, [value]);
  function commit() {
    const n = parseParameter(draft);
    if (!draft.trim() || !Number.isFinite(n)) {
      setDraft(format(value));
      setError("可输入小数、分数或 pi/2 等简单值。");
      return;
    }
    if (step >= 1 && (!Number.isInteger(n) || (n - min) % step !== 0)) {
      setError(
        step === 1
          ? "此参数需要整数，已恢复当前值。"
          : `此参数需要从 ${min} 开始、步长为 ${step} 的整数，已恢复当前值。`,
      );
      setDraft(format(value));
      return;
    }
    if (n < min || n > max) {
      setError(`范围是 ${format(min)} 到 ${format(max)}，已恢复当前值。`);
      setDraft(format(value));
      return;
    }
    setError("");
    onChange(n);
  }
  return (
    <div className="slider parameter-control">
      <div className="parameter-heading">
        <label htmlFor={id}>
          <MathText text={tr(label)} />
        </label>
        <input
          id={id}
          className="parameter-value"
          aria-label={tr(plainMathText(label) + "：输入数值")}
          inputMode="text"
          type="text"
          onFocus={(e) => {
            editing.current = true;
            e.currentTarget.select();
          }}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => {
            editing.current = false;
            commit();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
              e.currentTarget.blur();
            }
          }}
          aria-describedby={id + "-help"}
        />
      </div>
      <input
        aria-label={tr(plainMathText(label))}
        type="range"
        min={min}
        max={max}
        step={step >= 1 ? step : "any"}
        value={value}
        onKeyDown={(e) => {
          const next = parameterKeyValue(e.key, value, min, max, step);
          if (next !== null) {
            e.preventDefault();
            onChange(next);
          }
        }}
        onChange={(e) => onChange(+e.target.value)}
      />
      <small id={id + "-help"} className="parameter-help">
        {localizeNode(error || `${format(min)} — ${format(max)} · 可输入分数后按回车`)}
      </small>
      {localizeNode(error && (
        <span className="sr-only" role="status">
          {localizeNode(error)}
        </span>
      ))}
    </div>
  );
}
