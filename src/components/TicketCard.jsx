const priorityColors = {
  Critical: { bg: '#fff0f0', border: '#ff4d4d', text: '#cc0000', dot: '#ff4d4d' },
  High:     { bg: '#fff7ed', border: '#f97316', text: '#c2410c', dot: '#f97316' },
  Medium:   { bg: '#fefce8', border: '#eab308', text: '#854d0e', dot: '#eab308' },
  Low:      { bg: '#f0fdf4', border: '#22c55e', text: '#15803d', dot: '#22c55e' },
};

const TicketCard = ({ ticket, onCardClick }) => {
  const colors = priorityColors[ticket.priority] || priorityColors['Low'];

  return (
    <div
      className="ticket-card"
      onClick={() => onCardClick(ticket)}
      title="Click to add to In Progress"
    >
      <div className="ticket-card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span
          className="ticket-priority"
          style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
        >
          <span className="priority-dot" style={{ background: colors.dot }}></span>
          {ticket.priority}
        </span>
      </div>

      <h3 className="ticket-title">{ticket.title}</h3>
      <p className="ticket-description">{ticket.description}</p>

      <div className="ticket-footer">
        <div className="ticket-customer">
          <span className="customer-avatar">{ticket.customer.charAt(0)}</span>
          <span className="customer-name">{ticket.customer}</span>
        </div>
        <span className="ticket-date">📅 {ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
