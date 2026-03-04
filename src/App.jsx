import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import ticketsData from './data/tickets';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleCardClick = (ticket) => {
    const alreadyAdded = inProgressTasks.find(t => t.id === ticket.id);

    setInProgressTasks(prev => [...prev, ticket]);
  };

  const handleComplete = (task) => {
    // Remove from in-progress
    setInProgressTasks(prev => prev.filter(t => t.id !== task.id));
    // Remove from customer tickets
    setTickets(prev => prev.filter(t => t.id !== task.id));
    // Increment resolved count
    setResolvedCount(prev => prev + 1);
  };

  return (
    <div className="app">
      <Navbar />

      <main className="main-section" id="tickets">
        <div className="main-header">
          <h2 className="section-title">Customer Tickets</h2>
          <p className="section-subtitle">
            {tickets.length} open ticket{tickets.length !== 1 ? 's' : ''} awaiting attention
          </p>
        </div>

        <div className="main-content">
          {/* Left: Ticket Cards Grid */}
          <div className="tickets-grid-wrapper">
            {tickets.length === 0 ? (
              <div className="no-tickets">
                <div className="no-tickets-icon">🎉</div>
                <h3>All caught up!</h3>
                <p>There are no open tickets remaining.</p>
              </div>
            ) : (
              <div className="tickets-grid">
                {tickets.map(ticket => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onCardClick={handleCardClick}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Task Status Panel */}
          <div className="task-status-wrapper">
            <TaskStatus
              tasks={inProgressTasks}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
