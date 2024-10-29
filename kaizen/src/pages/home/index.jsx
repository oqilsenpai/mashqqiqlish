
import React, { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import SwiperComponent from "./swiper";
import useStore from "../../zustand";

const HomePage = () => {
  const [input, setInput] = useState("");
  const queryClient = useQueryClient();
  const { count } = useStore();

  const {
    data: images = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["images"],
    queryFn: () =>
      fetch("https://66cd8c938ca9aa6c8ccabdb1.mockapi.io/api/image").then(
        (res) => res.json()
      ),
  });
  console.log("homepage rendered");
  const mutation = useMutation({
    mutationFn: (newUser) =>
      fetch("https://66cd8c938ca9aa6c8ccabdb1.mockapi.io/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["images"]);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Loader data={images} />
      <input
        onChange={(evt) => setInput(evt.target.value)}
        value={input}
        type="text"
        className="text-black"
      />
      <div>
        <img
          className="w-[1200px] mx-14 m-6"
          src="/images/panda.png"
          alt="smth"
        />
      </div>
      <SwiperComponent />
      <div className="flex justify-between my-14">
        <h1>На неделе</h1>
        <h1 className="text-red-500">Показать все</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map(({ id, title, image }) => (
          <div key={id} className="flex flex-col items-center">
            <div className="w-[280px] h-[400px] bg-slate-800"></div>
            <h1 className="">
              movies
              {image && (
                <img src={image} alt={title} className="w-full h-auto" />
              )}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
