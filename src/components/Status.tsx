export default function Status({ status }: { status: string }) {
  return (
    <div className=" flex h-[50vh] items-center justify-center text-5xl">
      {status}
    </div>
  );
}
