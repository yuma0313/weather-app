//現在の日付を取得する関数を作成
export const getCurrentDate = () => {
  const getCurrentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return getCurrentDate;
};
