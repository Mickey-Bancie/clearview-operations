"use client";

import { useState } from "react";

type EditableTestimonialProps = {
  initialValue: string;
  editPermission: boolean;
  saveAction: (formData: FormData) => void | Promise<void>;
};

export default function EditableTestimonial({
  initialValue,
  editPermission,
  saveAction,
}: EditableTestimonialProps) {
  const [value, setValue] = useState(initialValue);
  const [savedValue, setSavedValue] = useState(initialValue);
  const [isSaving, setIsSaving] = useState(false);

  const hasChanges = value !== savedValue;

  async function handleSubmit(formData: FormData) {
    setIsSaving(true);

    try {
      await saveAction(formData);
      setSavedValue(value);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form action={handleSubmit}>
        <label
  htmlFor="editedTestimonial"
  className="text-xs font-black uppercase tracking-[0.16em] text-slate-500"
>
  Published Version
</label>
      <textarea
        id="editedTestimonial"
        name="editedTestimonial"
        rows={7}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!editPermission}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900 p-4 leading-7 text-white outline-none transition"
      />

      {editPermission && (
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            disabled={!hasChanges || isSaving}
            className={`rounded-xl px-5 py-3 text-sm font-bold text-white transition ${
              hasChanges
                ? "bg-sky-500 hover:bg-sky-400"
                : "cursor-default bg-slate-500"
            }`}
          >
            {isSaving ? "Saving..." : hasChanges ? "Save" : "Saved ✓"}
          </button>
        </div>
      )}
    </form>
  );
}