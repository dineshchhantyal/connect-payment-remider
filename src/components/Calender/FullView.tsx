"use client";
import React, { useEffect, useState } from "react";
import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import "@/components/Calender/css/Calender.css";
import baseURL from "@/lib/baseURL";
const getData = async () => {
  const res = await fetch(baseURL().concat("/api/payment"), {
    method: "GET",
  });
  return await res.json();
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const monthCellRender = (value: Dayjs) => {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      {/* <span>Backlog number</span> */}
    </div>
  ) : null;
};

const FullView = async () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  useEffect(() => {
    const fetchPayments = async () => {
      const data = await getData();
      setPayments(data);
    };
    fetchPayments();
  }, []);
  const dateCellRender = (value: Dayjs) => {
    const listData = payments.map((payment) => {
      const date = new Date(payment.duration);
      if (date.getDate() === value.date()) {
        return {
          type: "success",
          content: payment.title,
        };
      }
    });
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item?.content}>
            <Badge
              status={item?.type as BadgeProps["status"]}
              text={item?.content}
            />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} className="rounded-md" />;
};

export default FullView;
