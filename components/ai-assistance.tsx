import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Spinner } from "@nextui-org/spinner";
import { Chip } from "@nextui-org/chip";

import { apiUrl, fetcher, postFetcher, SWRparams } from "@/app/tools/fetcher";

interface AIAssistance {
  insights: string[];
  recommendations: string[];
  comment: string;
}

interface AIAssistanceRequest {
  country: string;
  report: string;
  prompt: string;
}

async function sendRequest(
  url: string,
  {
    arg,
  }: {
    arg: AIAssistanceRequest;
  },
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export default function AIAssistance({
  prompt,
  report,
  country,
  disabled,
}: {
  prompt?: string;
  country?: string;
  report?: string;
  disabled?: boolean;
}): React.ReactElement {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { trigger, data, error } = useSWRMutation(
    `${apiUrl}/ai-assistance/`,
    sendRequest,
    { revalidate: false },
  );

  return (
    <div>
      <div className="flex items-center">
        <Button
          className="bg-gradient-to-tr from-pink-500 to-violet-500 text-white shadow-lg"
          isDisabled={disabled}
          radius="full"
          onClick={async () => {
            try {
              setLoading(true);
              const result = await trigger({
                country: country || "Global",
                report: report || "total-revenue",
                prompt: prompt || "Why is this data important?",
              });

              setLoading(false);
            } catch (e) {
              // error handling
            }
          }}
        >
          <Image alt="AI" height={20} src="/chatgpt.svg" width={20} />
          Get AI Assistance
        </Button>
        <Input
          className="max-w-xs ml-10"
          defaultValue={prompt}
          label="Additional Prompt"
          type="text"
          variant="bordered"
          onChange={(e) => (prompt = e.target.value)}
        />
      </div>
      {(data && !data?.error && !loading && !error && (
        <div className="mt-7 py-3 px-5 border border-violet-400">
          <h2 className="text-xl">Country: {country}</h2>
          <h3 className="text-lg mt-3 font-bold">Insights:</h3>
          <ul className="list-disc list-inside">
            {data.insights?.map((d: string) => <li key={d}>{d}</li>)}
          </ul>
          <h3 className="text-lg mt-3 font-bold">Recommendations:</h3>
          <ul className="list-disc list-inside">
            {data.recommendations?.map((d: string) => <li key={d}>{d}</li>)}
          </ul>
          <h3 className="text-lg mt-3 font-bold">Commentary:</h3>
          <p>{data.comment}</p>
        </div>
      )) ||
        (loading && !data?.error && (
          <div className="flex f-full justify-center mt-10">
            <Spinner size="lg" />
          </div>
        )) ||
        (data?.error && !loading && (
          <div className="mt-5 flex justify-center">
            <Chip color="danger">{data?.error}</Chip>
          </div>
        ))}
    </div>
  );
}
