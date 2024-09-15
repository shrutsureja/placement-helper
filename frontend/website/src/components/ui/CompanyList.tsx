/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link";

const CompanyList = ({ companies }: { companies: any }) => {
    return (
        <div className="flex flex-col gap-4 my-2">
            {companies.map((c: any, i: number) => (
                <Link href={`/company/${c?._id}`} key={i} className={`card shadow-md ${i % 2 == 0 ? "bg-black/10" : `bg-inherit`}`}>
                    <div className="card-body">
                        <h3 className="text-lg">{c.companyName}</h3>
                        <p>{c.description}</p>
                        <span className="opacity-60">{c.city} - {c.state}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CompanyList;