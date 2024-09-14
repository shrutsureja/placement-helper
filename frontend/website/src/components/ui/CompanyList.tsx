"use client"
import companies from "@/data/companies.json"
import Link from "next/link";

type CompanyListType = typeof companies;

const CompanyList = ({ companies }: { companies: CompanyListType }) => {
    return (
        <div className="flex flex-col gap-4 my-2">
            {companies.map((c, i) => (
                <Link href={`/company/${i}`} key={i} className={`card shadow-md ${i % 2 == 0 ? "bg-black/20" : `bg-inherit`}`}>
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