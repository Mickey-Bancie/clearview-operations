
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FieldNotePage from "@/components/field-notes/FieldNotePage";
import { fieldNotes, getFieldNote } from "@/lib/field-notes";

export function generateStaticParams() {
  return fieldNotes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getFieldNote(slug);

  if (!note) return {};

  return {
    title: `${note.title} | Clearview Operations`,
    description: note.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getFieldNote(slug);

  if (!note) notFound();

  return <FieldNotePage note={note} />;
}
