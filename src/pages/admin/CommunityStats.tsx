import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Mock data for demonstration
const mockEngagementData = {
  totalMembers: 1250,
  activeMembers: 820,
  newMembersThisMonth: 45,
  workshopAttendees: 320,
  socialMediaFollowers: 3800,
  emailSubscribers: 1750,
  monthlyGrowthRate: 3.2,
  averageEventAttendance: 78,
};

const mockEventData = [
  { id: 1, name: "Quilting Workshop", attendees: 32, satisfaction: 4.8, date: "2023-10-12" },
  { id: 2, name: "Community Showcase", attendees: 120, satisfaction: 4.6, date: "2023-11-05" },
  { id: 3, name: "Historical Quilting Talk", attendees: 65, satisfaction: 4.7, date: "2023-12-18" },
  { id: 4, name: "Beginner's Quilting Class", attendees: 28, satisfaction: 4.9, date: "2024-01-22" },
  { id: 5, name: "Quilt Exhibition", attendees: 210, satisfaction: 4.5, date: "2024-02-15" },
];

const mockDemographicData = {
  ageGroups: [
    { group: "Under 18", percentage: 5 },
    { group: "18-24", percentage: 8 },
    { group: "25-34", percentage: 15 },
    { group: "35-44", percentage: 22 },
    { group: "45-54", percentage: 18 },
    { group: "55-64", percentage: 20 },
    { group: "65+", percentage: 12 },
  ],
  locations: [
    { name: "Local (within 10 miles)", percentage: 45 },
    { name: "Regional (10-50 miles)", percentage: 30 },
    { name: "State-wide", percentage: 15 },
    { name: "Out of state", percentage: 10 },
  ],
  interests: [
    { name: "Traditional Quilting", percentage: 65 },
    { name: "Modern Quilting", percentage: 45 },
    { name: "Art Quilts", percentage: 38 },
    { name: "Historical Quilts", percentage: 52 },
    { name: "Theater & Performance", percentage: 70 },
  ],
};

const mockFeedbackData = [
  { id: 1, event: "Quilting Through Time", rating: 4.8, comment: "Absolutely loved the historical context provided with each quilt pattern!", date: "2023-10-18" },
  { id: 2, event: "Threads of Memory", rating: 4.7, comment: "The performers brought such emotion to the stories behind each quilt. Truly moving.", date: "2023-11-22" },
  { id: 3, event: "Community Workshop", rating: 4.9, comment: "Learned so much in just one afternoon. The instructors were patient and knowledgeable.", date: "2023-12-10" },
  { id: 4, event: "The Patchwork Chronicles", rating: 4.6, comment: "Beautiful performance, though the venue was a bit cramped. Would love to see it in a larger space next time.", date: "2024-01-15" },
  { id: 5, event: "Quilting Exhibition", rating: 4.5, comment: "Amazing collection of quilts. Would have appreciated more information about the techniques used.", date: "2024-02-20" },
];

const CommunityStats = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timePeriod, setTimePeriod] = useState("last6months");

  return (
    <TabsContent value="community-stats" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Community Statistics</h2>
        <div className="flex space-x-2">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last3months">Last 3 Months</SelectItem>
              <SelectItem value="last6months">Last 6 Months</SelectItem>
              <SelectItem value="lastyear">Last Year</SelectItem>
              <SelectItem value="alltime">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export Report</Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Community Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockEngagementData.totalMembers.toLocaleString()}
                </div>
                <p className="text-xs text-green-600 mt-1">
                  +{mockEngagementData.newMembersThisMonth} this month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockEngagementData.activeMembers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {Math.round((mockEngagementData.activeMembers / mockEngagementData.totalMembers) * 100)}% of total
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Social Media Followers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockEngagementData.socialMediaFollowers.toLocaleString()}
                </div>
                <p className="text-xs text-green-600 mt-1">
                  +{mockEngagementData.monthlyGrowthRate}% growth rate
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Email Subscribers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockEngagementData.emailSubscribers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  42% open rate
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Engagement Overview</CardTitle>
              <CardDescription>Key metrics for community engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Member Growth</h3>
                  <div className="h-[200px] bg-gray-100 rounded-md flex items-end justify-between p-4">
                    {/* This would be a chart in a real implementation */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-amber-800 w-8 rounded-t-md" 
                        style={{ 
                          height: `${Math.floor(80 + Math.sin(i / 2) * 30 + Math.random() * 20)}px`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                    <span>Feb</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Engagement Channels</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>In-Person Events</span>
                          <span>42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Social Media</span>
                          <span>28%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Email Newsletter</span>
                          <span>18%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Website</span>
                          <span>12%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "12%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Member Retention</h3>
                    <div className="h-[200px] bg-gray-100 rounded-md p-4 flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold">86%</div>
                            <div className="text-sm text-muted-foreground">Retention Rate</div>
                          </div>
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke="#e5e7eb" 
                            strokeWidth="10" 
                          />
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke="#92400e" 
                            strokeWidth="10" 
                            strokeDasharray="251.2" 
                            strokeDashoffset="35.168" 
                            transform="rotate(-90 50 50)" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Events Tab */}
        <TabsContent value="events" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Attendance</CardTitle>
              <CardDescription>Attendance statistics for community events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {mockEventData.length}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      In selected time period
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Attendees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {mockEventData.reduce((sum, event) => sum + event.attendees, 0)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Across all events
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Average Satisfaction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {(mockEventData.reduce((sum, event) => sum + event.satisfaction, 0) / mockEventData.length).toFixed(1)}/5.0
                    </div>
                    <p className="text-xs text-green-600 mt-1">
                      +0.2 from previous period
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="rounded-md border">
                <div className="grid grid-cols-4 p-4 font-medium border-b">
                  <div>Event Name</div>
                  <div>Date</div>
                  <div className="text-right">Attendees</div>
                  <div className="text-right">Satisfaction</div>
                </div>
                {mockEventData.map(event => (
                  <div key={event.id} className="grid grid-cols-4 p-4 border-b last:border-0">
                    <div className="font-medium">{event.name}</div>
                    <div>{new Date(event.date).toLocaleDateString()}</div>
                    <div className="text-right">{event.attendees}</div>
                    <div className="text-right">{event.satisfaction}/5.0</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Event Trends</CardTitle>
              <CardDescription>Analysis of event performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Attendance by Event Type</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Performances</span>
                        <span>165 avg. attendees</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Exhibitions</span>
                        <span>210 avg. attendees</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Workshops</span>
                        <span>30 avg. attendees</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "14%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Talks</span>
                        <span>65 avg. attendees</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "31%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Satisfaction by Event Type</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Performances</span>
                        <span>4.7/5.0</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Exhibitions</span>
                        <span>4.5/5.0</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Workshops</span>
                        <span>4.9/5.0</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Talks</span>
                        <span>4.7/5.0</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Demographics</CardTitle>
              <CardDescription>Demographic breakdown of our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Age Distribution</h3>
                  <div className="space-y-4">
                    {mockDemographicData.ageGroups.map((group, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{group.group}</span>
                          <span>{group.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-amber-800 h-2.5 rounded-full" 
                            style={{ width: `${group.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Geographic Distribution</h3>
                  <div className="space-y-4">
                    {mockDemographicData.locations.map((location, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{location.name}</span>
                          <span>{location.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-amber-800 h-2.5 rounded-full" 
                            style={{ width: `${location.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Interest Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {mockDemographicData.interests.map((interest, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{interest.name}</span>
                          <span>{interest.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-amber-800 h-2.5 rounded-full" 
                            style={{ width: `${interest.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-[200px] bg-gray-100 rounded-md p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-medium mb-2">Engagement by Interest</div>
                      <div className="text-sm text-muted-foreground">
                        Members interested in both quilting and theater show 85% higher engagement rates
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Membership Insights</CardTitle>
              <CardDescription>Additional insights about our community members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Membership Duration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Less than 1 year</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>1-3 years</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>3+ years</span>
                        <span>23%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "23%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Participation Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Highly Active</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Moderately Active</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Occasional</span>
                        <span>27%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "27%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Skill Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Beginner</span>
                        <span>32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Intermediate</span>
                        <span>48%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "48%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Advanced</span>
                        <span>20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-800 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Feedback Tab */}
        <TabsContent value="feedback" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Feedback</CardTitle>
              <CardDescription>Feedback and testimonials from community members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Average Rating
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {(mockFeedbackData.reduce((sum, item) => sum + item.rating, 0) / mockFeedbackData.length).toFixed(1)}/5.0
                    </div>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < 4 ? 'text-amber-800' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Feedback Received
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {mockFeedbackData.length}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      In selected time period
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Sentiment Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      92% Positive
                    </div>
                    <p className="text-xs text-green-600 mt-1">
                      +5% from previous period
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Recent Feedback</h3>
                {mockFeedbackData.map(feedback => (
                  <Card key={feedback.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{feedback.event}</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date(feedback.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(feedback.rating) ? 'text-amber-800' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="italic">"{feedback.comment}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Feedback Themes</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Performance Quality</span>
                      <span>Very Positive</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Educational Value</span>
                      <span>Very Positive</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Venue Quality</span>
                      <span>Somewhat Positive</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Information Provided</span>
                      <span>Somewhat Positive</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                    </div>
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

export default CommunityStats;
