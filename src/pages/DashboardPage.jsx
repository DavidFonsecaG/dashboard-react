import React from 'react';
import { CreditCardIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const DashboardPage = () => {

  const stats = [
    {name: 'Total Revenue', amount: '$45,231.89', comparison: '+20.1% from last month', icon: 'Dollar Sign'},
    {name: 'Subscriptions', amount: '+2350', comparison: '+180.1% from last month', icon: 'People'},
    {name: 'Sales', amount: '+12,234', comparison: '+19% from last month', icon: 'Credit Card'},
    {name: 'Active Now', amount: '+573', comparison: '+201% from last month', icon: 'Stats'},
  ]

  const headers = [
    {name: 'Customer', hidden: false},
    {name: 'Type', hidden: true},
    {name: 'Status', hidden: true},
    {name: 'Date', hidden: true},
    {name: 'Amount', hidden: false},
  ]

  const transactions = [
    {name: 'Liam Johnson', email: 'liam@example.com', type: 'Sale', status: 'Approved', date: '2023-06-23', amount: '$250.00', hidden: false},
    {name: 'Olivia Smith', email: 'olivia@example.com', type: 'Refund', status: 'Declined', date: '2023-06-24', amount: '$150.00', hidden: true},
    {name: 'Noah Williams', email: 'noah@example.com', type: 'Subscription', status: 'Approved', date: '2023-06-25', amount: '$350.00', hidden: true},
    {name: 'Emma Brown', email: 'emma@example.com', type: 'Sale', status: 'Approved', date: '2023-06-26', amount: '$450.00', hidden: true},
    {name: 'Liam Johnson', email: 'liam@example.com', type: 'Sale', status: 'Approved', date: '2023-06-23', amount: '$550.00', hidden: false},
  ]

  const recentSales = [
    {name: 'Olivia Smith', email: 'olivia@example.com', amount: '+$1,999.00', avatar: 'https://ui.shadcn.com/avatars/01.png'},
    {name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', avatar: 'https://ui.shadcn.com/avatars/02.png'},
    {name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', avatar: 'https://ui.shadcn.com/avatars/03.png'},
    {name: 'William Kim', email: 'will@email.com', amount: '+$99.00', avatar: 'https://ui.shadcn.com/avatars/04.png'},
    {name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00', avatar: 'https://ui.shadcn.com/avatars/05.png'},
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm"> 
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm text-gray-800 font-medium">{stat.name}</h3>
              <CreditCardIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">{stat.amount}</div>
              <p className="text-xs text-gray-500">{stat.comparison}</p>
            </div>
            
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* Transactions Table */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm xl:col-span-2" x-chunk="A card showing a table of recent transactions with a link to view all transactions.">
          <div className="space-y-1.5 p-6 flex flex-row items-center">
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Transactions</h3>
              <p className="text-sm text-gray-500">Recent transactions from your store.</p>
            </div>
            <a 
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-900 h-9 rounded-md px-3 ml-auto gap-1" 
              href="#"
            >
              View All
              <ArrowUpRightIcon aria-hidden="true" className="h-3 w-3" />
            </a>
          </div>
          <div className="p-6 pt-0">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-50">
                    {headers.map((header) => (
                      <th 
                        className={classNames(
                          header.hidden ? 'hidden md:table-cell lg:hidden xl:table-cell' : ' ',
                          'h-12 px-4 text-left align-middle font-medium text-gray-500 [&amp;:has([role=checkbox])]:pr-0 last:text-right',
                        )}
                      >
                        {header.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  {transactions.map((row) => (
                    <tr className="border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div className="font-medium">{row.name}</div>
                        <div className="hidden text-sm text-gray-500 md:inline">{row.email}</div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell lg:hidden xl:table-cell">{row.type}</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell lg:hidden xl:table-cell">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-gray-900 text-xs">{row.status}</div>
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell lg:hidden xl:table-cell">{row.date}</td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Sales List */}
        <div className="rounded-lg border bg-card shadow-sm" x-chunk="A card showing a list of recent sales with customer names and email addresses.">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Recent Sales</h3>
          </div>
          <div className="p-6 pt-0 grid gap-8">
            {recentSales.map((sale) => (
              <div className="flex items-center gap-4" key={sale.name}>
                <span className="relative shrink-0 overflow-hidden rounded-full hidden h-9 w-9 sm:flex">
                  <img className="aspect-square h-full w-full" alt="Avatar" src={sale.avatar}/>
                </span>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{sale.name}</p>
                  <p className="text-sm text-gray-500">{sale.email}</p>
                </div>
                <div className="ml-auto font-medium">{sale.amount}</div>
              </div>
            ))}
          </div>
        </div>  
      </div>  
    </>
  );
};

export default DashboardPage;
