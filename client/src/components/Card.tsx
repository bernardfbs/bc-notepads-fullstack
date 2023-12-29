type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-grey m-4 rounded-lg shadow p-4 max-w-screen-md border md:mx-auto">
      {children}{" "}
    </div>
  );
}
