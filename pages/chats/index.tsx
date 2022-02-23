import type { NextPage } from "next";
import Link from "next/link";
import Layout from "components/layout";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title='채팅'>
      <div className='divide-y-[1px] '></div>
    </Layout>
  );
};

export default Chats;
