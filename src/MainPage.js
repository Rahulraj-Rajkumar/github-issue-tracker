import React,{useEffect, useState} from "react";
import './App.css';
import Issue from "./Issue";
import Paginater from "./components/Paginater"


const MainPage = props => {
  const {history} = props;
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(7);
  useEffect(() => {
    getIssues();
  }, []);

  const getIssues = async () => {
    setLoading(true);
    const response = await fetch('https://api.github.com/repos/walmartlabs/thorax/issues');
    const data = await response.json();
    setIssues(data);
    setLoading(false);
    console.log(data);
  }

  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Github Issue Browser</h1>  
        <Issue issues={currentIssues} loading ={loading} history = {history}/>
        <Paginater issuesPerPage={issuesPerPage} totalIssues={issues.length} paginate ={paginate}/>
    </div>
  );
}

export default MainPage;
