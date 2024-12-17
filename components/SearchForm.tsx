import Form from "next/form";
import React from 'react'
import ResetBtn from "./ResetBtn";
import { Search } from "lucide-react";

function SearchForm({query} : {query? : string}) {  

  return (
    <Form action="/" className="search-form" scroll={false}>
        <input type="text" name="query" defaultValue={query} className="search-input" placeholder="Search Startups" />

        <div className="flex gap-2">
            {query && <ResetBtn />}

            <button type="submit" className="search-btn text-white">
                <Search className="size-5"/>
            </button>
        </div>
    </Form>
  )
}

export default SearchForm