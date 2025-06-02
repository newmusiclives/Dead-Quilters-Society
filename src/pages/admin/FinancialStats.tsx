import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for demonstration
const mockShows = [
  { id: 1, name: "Quilting Through Time", revenue: 12500, expenses: 8200, tickets: 250, date: "2023-10-15" },
  { id: 2, name: "Threads of Memory", revenue: 9800, expenses: 6500, tickets: 196, date: "2023-11-20" },
  { id: 3, name: "The Patchwork Chronicles", revenue: 15200, expenses: 9800, tickets: 304, date: "2023-12-05" },
  { id: 4, name: "Stitches in History", revenue: 11000, expenses: 7300, tickets: 220, date: "2024-01-18" },
  { id: 5, name: "Fabric of Our Lives", revenue: 13700, expenses: 8900, tickets: 274, date: "2024-02-22" },
];

const mockTheaters = [
  { id: 1, name: "Heritage Theater", shows: 12, totalRevenue: 58000, avgAttendance: 230 },
  { id: 2, name: "Community Playhouse", shows: 8, totalRevenue: 42000, avgAttendance: 210 },
  { id: 3, name: "Arts Center", shows: 5, totalRevenue: 28000, avgAttendance: 224 },
  { id: 4, name: "Downtown Stage", shows: 10, totalRevenue: 51000, avgAttendance: 204 },
];

const FinancialStats = () => {
  const [activeTab, setActiveTab] = useState("shows");
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [selectedShow, setSelectedShow] = useState<string>("all");
  const [selectedTheater, setSelectedTheater] = useState<string>("all");

  return (
    <TabsContent value="financial-stats" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Financial Statistics</h2>
        <div className="flex space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !dateRange.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} -{" "}
                      {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Filter by date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={new Date(2023, 0)}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <Button>Export Data</Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="shows">Shows</TabsTrigger>
          <TabsTrigger value="theaters">Theaters</TabsTrigger>
        </TabsList>
        
        {/* Shows Financial Data */}
        <TabsContent value="shows" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Show Performance</CardTitle>
                  <CardDescription>Financial data for all shows</CardDescription>
                </div>
                <Select value={selectedShow} onValueChange={setSelectedShow}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select show" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Shows</SelectItem>
                    {mockShows.map(show => (
                      <SelectItem key={show.id} value={show.id.toString()}>
                        {show.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${mockShows.reduce((sum, show) => sum + show.revenue, 0).toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      +12.5% from previous period
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${mockShows.reduce((sum, show) => sum + show.expenses, 0).toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      +8.2% from previous period
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Net Profit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${mockShows.reduce((sum, show) => sum + (show.revenue - show.expenses), 0).toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      +18.7% from previous period
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="rounded-md border">
                <div className="grid grid-cols-6 p-4 font-medium border-b">
                  <div>Show Name</div>
                  <div>Date</div>
                  <div className="text-right">Revenue</div>
                  <div className="text-right">Expenses</div>
                  <div className="text-right">Profit</div>
                  <div className="text-right">Tickets Sold</div>
                </div>
                {mockShows.map(show => (
                  <div key={show.id} className="grid grid-cols-6 p-4 border-b last:border-0">
                    <div className="font-medium">{show.name}</div>
                    <div>{new Date(show.date).toLocaleDateString()}</div>
                    <div className="text-right">${show.revenue.toLocaleString()}</div>
                    <div className="text-right">${show.expenses.toLocaleString()}</div>
                    <div className="text-right">${(show.revenue - show.expenses).toLocaleString()}</div>
                    <div className="text-right">{show.tickets}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>Analysis of revenue sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Revenue by Source</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Ticket Sales</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Merchandise</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Concessions</span>
                        <span>7%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "7%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Donations</span>
                        <span>3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "3%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Expense Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Venue Rental</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Production Costs</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Marketing</span>
                        <span>18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "18%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Staff</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Other</span>
                        <span>4%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "4%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Theaters Financial Data */}
        <TabsContent value="theaters" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Theater Performance</CardTitle>
                  <CardDescription>Financial data by venue</CardDescription>
                </div>
                <Select value={selectedTheater} onValueChange={setSelectedTheater}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select theater" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Theaters</SelectItem>
                    {mockTheaters.map(theater => (
                      <SelectItem key={theater.id} value={theater.id.toString()}>
                        {theater.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Shows
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {mockTheaters.reduce((sum, theater) => sum + theater.shows, 0)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all venues
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${mockTheaters.reduce((sum, theater) => sum + theater.totalRevenue, 0).toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      From all theater venues
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Average Attendance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Math.round(mockTheaters.reduce((sum, theater) => sum + theater.avgAttendance, 0) / mockTheaters.length)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Per show across all venues
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>Theater Name</div>
                  <div className="text-right">Shows Hosted</div>
                  <div className="text-right">Total Revenue</div>
                  <div className="text-right">Avg. Revenue/Show</div>
                  <div className="text-right">Avg. Attendance</div>
                </div>
                {mockTheaters.map(theater => (
                  <div key={theater.id} className="grid grid-cols-5 p-4 border-b last:border-0">
                    <div className="font-medium">{theater.name}</div>
                    <div className="text-right">{theater.shows}</div>
                    <div className="text-right">${theater.totalRevenue.toLocaleString()}</div>
                    <div className="text-right">${Math.round(theater.totalRevenue / theater.shows).toLocaleString()}</div>
                    <div className="text-right">{theater.avgAttendance}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Venue Comparison</CardTitle>
              <CardDescription>Performance metrics across different venues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Revenue per Show by Venue</h3>
                  <div className="space-y-4">
                    {mockTheaters.map(theater => (
                      <div key={theater.id} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{theater.name}</span>
                          <span>${Math.round(theater.totalRevenue / theater.shows).toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-amber-800 h-2.5 rounded-full" 
                            style={{ 
                              width: `${(theater.totalRevenue / theater.shows) / 
                                (Math.max(...mockTheaters.map(t => t.totalRevenue / t.shows)) * 1.1) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Attendance Rate by Venue</h3>
                  <div className="space-y-4">
                    {mockTheaters.map(theater => (
                      <div key={theater.id} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{theater.name}</span>
                          <span>{theater.avgAttendance} attendees</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-amber-800 h-2.5 rounded-full" 
                            style={{ 
                              width: `${(theater.avgAttendance) / 
                                (Math.max(...mockTheaters.map(t => t.avgAttendance)) * 1.1) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </TabsContent>
  );
};

export default FinancialStats;
