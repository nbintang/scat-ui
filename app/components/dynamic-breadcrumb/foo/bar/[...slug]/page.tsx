export default async function SlugFooBar({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div>
      <h1>Gotcha!, the slug is {slug}</h1>
    </div>
  );
}
