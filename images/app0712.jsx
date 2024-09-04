function App() {
    const [data, setData] = useState(null);
    const endpoint = "http://localhost:3000/admin/articles";
    const target = "/";
    const url = `${endpoint}${target}`;
  
    const getData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.status);
        setData(response.data.status);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <>
        <p className="text-3xl underline font-bold">
          {data ? data : "Loading..."}
        </p >
      </>
    );
  }