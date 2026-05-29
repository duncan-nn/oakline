"use client";

export default function TestClick() {
  return (
    <button
      onClick={() => alert("works")}
      style={{ padding: 20, background: "red" }}
    >
      Test Click
    </button>
  );
}