const ticketsData = [
  {
    id: "1001",
    title: "Login page not loading",
    description: "Users are unable to access the login page. The page returns a 502 error after a recent deployment.",
    customer: "Arman Hossain",
    priority: "High",
    status: "open",
    createdAt: "2025-01-15"
  },
  {
    id: "1002",
    title: "Payment gateway timeout",
    description: "Checkout process fails at the payment step. Customers are being charged but orders are not confirmed.",
    customer: "Nadia Islam",
    priority: "Critical",
    status: "open",
    createdAt: "2025-01-16"
  },
  {
    id: "1003",
    title: "Email notifications not sending",
    description: "Order confirmation emails are not being delivered to customers after successful purchase.",
    customer: "Rahim Chowdhury",
    priority: "Medium",
    status: "open",
    createdAt: "2025-01-17"
  },
  {
    id: "1004",
    title: "Dashboard charts not rendering",
    description: "The analytics dashboard shows blank charts on Firefox and Safari. Works fine on Chrome.",
    customer: "Sultana Begum",
    priority: "Medium",
    status: "open",
    createdAt: "2025-01-18"
  },
  {
    id: "1005",
    title: "Profile picture upload fails",
    description: "Users get a 413 error when trying to upload profile pictures larger than 1MB.",
    customer: "Kamal Uddin",
    priority: "Low",
    status: "open",
    createdAt: "2025-01-19"
  },
  {
    id: "1006",
    title: "Search results returning wrong data",
    description: "Product search is returning unrelated items. The search index seems to be corrupted.",
    customer: "Fatema Khatun",
    priority: "High",
    status: "open",
    createdAt: "2025-01-20"
  },
  {
    id: "1007",
    title: "Mobile app crashes on startup",
    description: "Android app version 2.3.1 crashes immediately after splash screen on devices running Android 11.",
    customer: "Jahangir Alam",
    priority: "Critical",
    status: "open",
    createdAt: "2025-01-21"
  },
  {
    id: "1008",
    title: "CSV export producing empty files",
    description: "Exporting reports to CSV results in empty files despite data being visible in the table.",
    customer: "Rina Parvin",
    priority: "Medium",
    status: "open",
    createdAt: "2025-01-22"
  },
  {
    id: "1009",
    title: "2FA codes not accepted",
    description: "Two-factor authentication codes sent via SMS are being rejected even when entered immediately.",
    customer: "Sohel Rana",
    priority: "High",
    status: "open",
    createdAt: "2025-01-23"
  },
  {
    id: "1010",
    title: "Discount codes not applying",
    description: "Valid promotional discount codes entered at checkout are returning 'invalid code' error.",
    customer: "Meherun Nesa",
    priority: "Medium",
    status: "open",
    createdAt: "2025-01-24"
  },
  {
    id: "1011",
    title: "API rate limit errors on bulk operations",
    description: "Bulk import feature for products fails midway with 429 rate limit errors for enterprise accounts.",
    customer: "Bashir Ahmed",
    priority: "High",
    status: "open",
    createdAt: "2025-01-25"
  },
  {
    id: "1012",
    title: "Inventory count showing negative values",
    description: "Stock count for several SKUs displays negative numbers after the latest inventory sync.",
    customer: "Taslima Akter",
    priority: "Critical",
    status: "open",
    createdAt: "2025-01-26"
  }
];

export default ticketsData;
