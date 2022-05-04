import React, { useState } from "react";
import Top from "./Top";
import Content from "./Content";
import Footer from "./Footer";
import Table from "./Table";

export default function Main() {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("select * from customers");
  const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Top 
          setQuery={setQuery}
          value={value}
          setValue={setValue}
        />
        <Content 
            setQuery={setQuery}
            value={value}
            setValue={setValue}
            isOpen={isOpen} />
            {query ? <Table query={query} isOpen={isOpen} /> : null}
        <Footer />
      </div>
    );
}