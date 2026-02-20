import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export const Flames = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const Submit = (data) => {
    navigate("/result", {
      state: {
        name1: data.kingName,
        name2: data.queenName,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-200 p-8">
        
        <div className="flex items-center justify-center gap-3 mb-7">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
            Flames
          </h1>
        </div>

        <form onSubmit={handleSubmit(Submit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-gray-600">
              King Name
            </label>
            <input
              {...register("kingName")}
              placeholder="Enter king name"
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-gray-600">
              Queen Name
            </label>
            <input
              {...register("queenName")}
              placeholder="Enter queen name"
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-lg" 
          >
            Calculate
          </button>

        </form>
      </div>
    </div>
  );
};

