import {useState} from 'react';

export default function CourseList() {
    const [search, setSearch] = useState(" ");
        
    const courses = [
        { id: 1, title: "Introduction to React"},
        { id: 2, title: "Advanced React"}
    ]

    const filtered = courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h2>Course List</h2>

            <input type="text" placeholder="Search" value= {search} onChange = {(e) => setSearch(e.target.value)}/>
            <ui>
                {filtered.map(c => (
                    <li key={c.id}>{c.title}</li>
                ))}
            </ui>
        </div>
    );
}




