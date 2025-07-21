import { useState } from "react";
import logo from '../../image.png';
import { lineChartData } from "../../data/dashboardData";
import DashboardMain from "./DashboardMain";
import Reports from "./Reports";
import MC from "./MC";
import Proof from "./Proof";
import { useState as useReactState } from "react";

const editableCards = [
  {
    key: "authorUpdateRate",
    title: "Author Update Rate",
    initialData: lineChartData.authorUpdateRate,
    cardTitle: "Author Update Rate",
  },
  {
    key: "updateQueryPerArticle",
    title: "Update Query % per Article",
    initialData: lineChartData.updateQueryPerArticle,
    cardTitle: "Update Query % per Article",
  },
  {
    key: "additionalEditsPerArticle",
    title: "Additional Edits per Article",
    initialData: lineChartData.additionalEditsPerArticle,
    cardTitle: "Additional Edits per Article",
  },
  
];

export const Dashboard = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [page, setPage] = useState<'dashboard' | 'reports' | 'mc' | 'proof_readines'>('dashboard');

  const handleCardClick = (key: string) => {
    const config = editableCards.find((c) => c.key === key);
    if (config) {
      setExpandedCard(key);
      setEditData(config.initialData.map((d: any) => ({ ...d })));
    }
  };

  const handleDataChange = (idx: number, field: string, value: string) => {
    setEditData((prev: any) => {
      const newData = [...prev];
      newData[idx][field] = field === "value" ? Number(value) : value;
      return newData;
    });
  };

  return (
    <div className="h-screen bg-background flex">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-56 bg-gray-100 text-gray-900 flex flex-col py-8 px-4 shadow-lg relative" style={{ height: '101.5vh' }}>
          <button
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-transparent focus:outline-none"
            onClick={() => setSidebarOpen(false)}
            title="Hide sidebar"
          >
            <span className="sr-only">Hide sidebar</span>
            {/* Hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="mb-8 flex">
            <img src={logo} alt="Neoprc Logo" style={{ height: 40 }} />
          </div>
          <nav className="flex-1">
            <ul className="space-y-4">
        <li
          className={`font-semibold cursor-pointer ${page === 'proof_readines' ? 'text-black-700 hover:text-blue-900' : 'text-black-600 hover:text-blue-900'}`}
          onClick={() => setPage('proof_readines')}
        >
          Proof Readiness
        </li>
        <li
          className={`font-semibold cursor-pointer ${page === 'dashboard' ? 'text-blue-700 hover:text-blue-900' : 'text-black-600 hover:text-blue-900'}`}
          onClick={() => setPage('dashboard')}
        >
          Author I
        </li>
        <li
          className={`cursor-pointer ${page === 'reports' ? 'text-blue-700 font-semibold hover:text-blue-900' : 'text-black-600 hover:text-blue-900'}`}
          onClick={() => setPage('reports')}
        >
          Author II
        </li>
        <li
          className={`cursor-pointer ${page === 'mc' ? 'text-blue-700 font-semibold hover:text-blue-900' : 'text-black-600 hover:text-blue-900'}`}
          onClick={() => setPage('mc' as any)}
        >
          Validator
        </li>
              
            </ul>
          </nav>
          <div className="mt-8 text-xs text-black-400 text-center">© Proof Central 4.0</div>
        </aside>
      )}
      {/* Main Content */}
      <main className="flex-1 p-3 relative">
        {!sidebarOpen && (
          <button
            className="absolute top-4 left-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black-700 hover:bg-black-800 text-black focus:outline-none shadow"
            onClick={() => setSidebarOpen(true)}
            title="Show sidebar"
          >
            <span className="sr-only">Show sidebar</span>
            {/* Hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
        {page === 'dashboard' && <DashboardMain handleCardClick={handleCardClick} />}
        {page === 'reports' && <Reports />}
        {page === 'mc' && <MC />}
        {page === 'proof_readines' && <Proof />}
      </main>
  </div>
  );
}
