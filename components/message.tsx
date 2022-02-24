import { cls } from "@libs/client/utils";
import Image from "next/image";

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}

export default function Message({
  message,
  avatarUrl,
  reversed,
}: MessageProps) {
  return (
    <div
      className={cls(
        "flex  items-start space-x-2",
        reversed ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      <Image
        width={37}
        height={37}
        src={`https://imagedelivery.net/VN-2madUiks20zZD2HQArA/${avatarUrl}/avatar`}
        className='w-10 h-10 rounded-full bg-slate-500'
      />
      <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md'>
        <p>{message}</p>
      </div>
    </div>
  );
}
