import Form from "next/form";
import React from 'react'
import ResetBtn from "./ResetBtn";

function SearchForm() {
    const query = "Test";
    

  return (
    <Form action="/" className="search-form" scroll={false}>
        <input type="text" name="query" defaultValue={query} className="search-input" placeholder="Search Startups" />

        <div className="flex gap-2">
            {query && <ResetBtn />}
        </div>
    </Form>
  )
}

export default SearchForm