"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Clock, CheckCircle, Plus, Search } from "lucide-react"
import Link from "next/link"

type UserRole = "student" | "health-worker" | "admin"

export default function Dashboard() {
  const [currentRole, setCurrentRole] = useState<UserRole>("student")

  const StatCard = ({
    title,
    value,
    icon: Icon,
    bgColor,
    iconColor,
  }: {
    title: string
    value: string | number
    icon: any
    bgColor: string
    iconColor: string
  }) => (
    <Card>
      <CardContent className="flex items-center p-6">
        <div className={`p-3 rounded-lg ${bgColor} mr-4`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )

  const StudentDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="text-gray-600">Browse and manage dental case leads</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Available Cases" value={3} icon={FileText} bgColor="bg-blue-100" iconColor="text-blue-600" />
        <StatCard title="Saved Cases" value={0} icon={Plus} bgColor="bg-green-100" iconColor="text-green-600" />
        <StatCard
          title="Claimed Cases"
          value={0}
          icon={CheckCircle}
          bgColor="bg-orange-100"
          iconColor="text-orange-600"
        />
        <StatCard title="Completed" value={0} icon={CheckCircle} bgColor="bg-purple-100" iconColor="text-purple-600" />
      </div>

      {/* Navigation Tabs */}
      <Tabs defaultValue="case-leads" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="case-leads">Case Leads</TabsTrigger>
          <TabsTrigger value="saved-cases">Saved Cases</TabsTrigger>
          <TabsTrigger value="claimed-cases">Claimed Cases</TabsTrigger>
          <TabsTrigger value="case-history">Case History</TabsTrigger>
        </TabsList>

        <TabsContent value="case-leads" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Available Case Leads</h2>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search cases..." className="pl-10 w-64" />
              </div>
              <Select defaultValue="all-sources">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-sources">All Sources</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="reddit">Reddit</SelectItem>
                  <SelectItem value="barangay">Barangay</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Case Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Facebook Case */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm font-medium">Facebook</span>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">Ana Reyes</h3>
                <p className="text-sm text-gray-600">
                  Severe toothache on upper left molar, pain for 3 days, difficulty eating. Looking for urgent dental
                  care.
                </p>
                <div className="flex gap-2">
                  <Badge variant="destructive" className="text-xs">
                    urgent
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Quezon City
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Reddit Case */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm font-medium">Reddit</span>
                  </div>
                  <span className="text-sm text-gray-500">5 hours ago</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">Carlos Mendoza</h3>
                <p className="text-sm text-gray-600">
                  Need wisdom tooth extraction, impacted and causing pain. Referred by dentist for extraction.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    moderate
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Makati
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Barangay Case */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-sm font-medium">Barangay</span>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg">Maria Santos</h3>
                <p className="text-sm text-gray-600">
                  Routine dental cleaning needed, last visit was 2 years ago. Some sensitivity issues.
                </p>
                <div className="flex gap-2">
                  <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                    routine
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Pasig
                  </Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saved-cases">
          <div className="text-center py-12">
            <p className="text-gray-500">No saved cases yet</p>
          </div>
        </TabsContent>

        <TabsContent value="claimed-cases">
          <div className="text-center py-12">
            <p className="text-gray-500">No claimed cases yet</p>
          </div>
        </TabsContent>

        <TabsContent value="case-history">
          <div className="text-center py-12">
            <p className="text-gray-500">No case history yet</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

  const HealthWorkerDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Barangay Health Worker Dashboard</h1>
        <p className="text-gray-600">Submit and track community dental cases</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Cases Submitted" value={2} icon={Plus} bgColor="bg-blue-100" iconColor="text-blue-600" />
        <StatCard
          title="Cases Completed"
          value={1}
          icon={CheckCircle}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard title="Pending Cases" value={1} icon={Clock} bgColor="bg-orange-100" iconColor="text-orange-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Submit New Case Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit New Case</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patient-name">Patient Name</Label>
              <Input id="patient-name" placeholder="Enter patient name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Contact Information</Label>
              <Input id="contact" placeholder="Phone or email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" placeholder="Patient age" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="City or area" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Complete address" rows={3} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Dental Issue Description</Label>
              <Textarea id="description" placeholder="Describe the dental problem" rows={4} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select defaultValue="routine">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="routine">Routine</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">Submit Case</Button>
          </CardContent>
        </Card>

        {/* Recent Cases */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Maria Santos</h4>
                  <Badge className="bg-blue-100 text-blue-800">Available</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Routine dental cleaning needed, last visit was 2 years ago. Some sensitivity issues...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Age: 45</span>
                  <span>Submitted 7/10/2025</span>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Pedro Garcia</h4>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Dental cleaning completed successfully. Patient satisfied with treatment...
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Age: 55</span>
                  <span>Submitted 7/4/2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const AdminDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Manage users, review leads, and monitor system statistics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Students" value={1} icon={Users} bgColor="bg-blue-100" iconColor="text-blue-600" />
        <StatCard
          title="Total Case Leads"
          value={4}
          icon={FileText}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard title="Pending Reviews" value={0} icon={Clock} bgColor="bg-orange-100" iconColor="text-orange-600" />
        <StatCard
          title="Completed Cases"
          value={1}
          icon={CheckCircle}
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      {/* Navigation Tabs */}
      <Tabs defaultValue="user-management" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="user-management">User Management</TabsTrigger>
          <TabsTrigger value="lead-review">Lead Review</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="user-management" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">User Management</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="p-4 font-medium text-gray-600">USER</th>
                      <th className="p-4 font-medium text-gray-600">ROLE</th>
                      <th className="p-4 font-medium text-gray-600">STATUS</th>
                      <th className="p-4 font-medium text-gray-600">LAST ACTIVE</th>
                      <th className="p-4 font-medium text-gray-600">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">MS</span>
                          </div>
                          <div>
                            <p className="font-medium">Maria Santos</p>
                            <p className="text-sm text-gray-600">admin@dentalcare.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          admin
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                      </td>
                      <td className="p-4 text-gray-600">7/10/2025</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            Deactivate
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">JD</span>
                          </div>
                          <div>
                            <p className="font-medium">Juan Dela Cruz</p>
                            <p className="text-sm text-gray-600">juan.delacruz@email.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          student
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                      </td>
                      <td className="p-4 text-gray-600">7/10/2025</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            Deactivate
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">MS</span>
                          </div>
                          <div>
                            <p className="font-medium">Maria Santos</p>
                            <p className="text-sm text-gray-600">maria.santos@email.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          barangay
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                      </td>
                      <td className="p-4 text-gray-600">7/9/2025</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            Deactivate
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lead-review">
          <div className="text-center py-12">
            <p className="text-gray-500">Lead review interface coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="text-center py-12">
            <p className="text-gray-500">Analytics dashboard coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-blue-600">SmileConnect</span>
            </Link>

            {/* Role Switcher */}
            <div className="flex items-center gap-4">
              <Select value={currentRole} onValueChange={(value: UserRole) => setCurrentRole(value)}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student Dashboard</SelectItem>
                  <SelectItem value="health-worker">Health Worker</SelectItem>
                  <SelectItem value="admin">Admin Dashboard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {currentRole === "student" && <StudentDashboard />}
        {currentRole === "health-worker" && <HealthWorkerDashboard />}
        {currentRole === "admin" && <AdminDashboard />}
      </main>
    </div>
  )
}
