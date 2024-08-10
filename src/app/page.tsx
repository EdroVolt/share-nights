import CountdownTimer from "./ui/common/countdown-timer";

export default function Home() {
  const shareNightsReleaseDate = "2024-12-25T00:00:00";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background-100 text-primary-900 dark:bg-background-900 dark:text-primary-100">
      <CountdownTimer dueDate={shareNightsReleaseDate} />
    </main>
  );
}
