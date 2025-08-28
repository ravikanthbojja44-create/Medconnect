"use client"

import { useState } from "react"
import {
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  MapPin,
  Heart,
  Calendar,
  Phone,
  Edit,
  ChevronRight,
  LogOut,
  HelpCircle,
  FileText,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ProfilePage() {
  const [notifications, setNotifications] = useState({
    appointments: true,
    reminders: true,
    promotions: false,
    emergency: true,
  })

  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    memberSince: "January 2024",
    avatar: "/professional-woman-diverse.png",
    emergencyContact: {
      name: "John Johnson",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543",
    },
    insurance: {
      provider: "Blue Cross Blue Shield",
      policyNumber: "BC123456789",
      groupNumber: "GRP001",
    },
    medicalInfo: {
      bloodType: "O+",
      allergies: ["Penicillin", "Shellfish"],
      conditions: ["Hypertension"],
      medications: ["Lisinopril 10mg"],
    },
  }

  const recentActivity = [
    {
      id: 1,
      type: "appointment",
      title: "Appointment with Dr. Sarah Johnson",
      date: "Dec 20, 2024",
      status: "Completed",
    },
    {
      id: 2,
      type: "review",
      title: "Reviewed City General Hospital",
      date: "Dec 18, 2024",
      rating: 5,
    },
    {
      id: 3,
      type: "saved",
      title: "Saved Metro Children's Hospital",
      date: "Dec 15, 2024",
    },
  ]

  const stats = {
    appointments: 12,
    savedHospitals: 5,
    savedDoctors: 8,
    reviewsWritten: 3,
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="bg-white text-primary text-lg font-bold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-primary-foreground/80">{user.email}</p>
            <p className="text-sm text-primary-foreground/60">Member since {user.memberSince}</p>
          </div>
          <Button variant="secondary" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{stats.appointments}</p>
              <p className="text-sm text-muted-foreground">Appointments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">{stats.savedHospitals + stats.savedDoctors}</p>
              <p className="text-sm text-muted-foreground">Saved Items</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/booking">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Calendar className="h-4 w-4 mr-3" />
                Book New Appointment
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Button>
            </Link>
            <Link href="/emergency">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent text-red-600 border-red-200 hover:bg-red-50"
              >
                <Shield className="h-4 w-4 mr-3" />
                Emergency Services
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Button>
            </Link>
            <Link href="/saved">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Heart className="h-4 w-4 mr-3" />
                View Saved Items
                <ChevronRight className="h-4 w-4 ml-auto" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {activity.type === "appointment" && <Calendar className="h-4 w-4 text-primary" />}
                  {activity.type === "review" && <Star className="h-4 w-4 text-accent" />}
                  {activity.type === "saved" && <Heart className="h-4 w-4 text-red-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
                {activity.type === "review" && activity.rating && (
                  <div className="flex items-center">
                    {[...Array(activity.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-accent fill-current" />
                    ))}
                  </div>
                )}
                {activity.type === "appointment" && (
                  <Badge variant="secondary" className="text-xs">
                    {activity.status}
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center">
              <User className="h-4 w-4 mr-2" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-xs text-muted-foreground">{user.phone}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Edit className="h-3 w-3" />
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-xs text-muted-foreground">{user.location}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Edit className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Medical Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Blood Type</p>
                <p className="font-medium">{user.medicalInfo.bloodType}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Allergies</p>
                <p className="font-medium">{user.medicalInfo.allergies.join(", ")}</p>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-muted-foreground text-sm mb-1">Current Conditions</p>
              <div className="flex flex-wrap gap-1">
                {user.medicalInfo.conditions.map((condition) => (
                  <Badge key={condition} variant="outline" className="text-xs">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Current Medications</p>
              <div className="flex flex-wrap gap-1">
                {user.medicalInfo.medications.map((medication) => (
                  <Badge key={medication} variant="outline" className="text-xs">
                    {medication}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Emergency Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{user.emergencyContact.name}</p>
                <p className="text-sm text-muted-foreground">{user.emergencyContact.relationship}</p>
                <p className="text-sm text-muted-foreground">{user.emergencyContact.phone}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Insurance Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              Insurance Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium">{user.insurance.provider}</p>
              <p className="text-sm text-muted-foreground">Policy: {user.insurance.policyNumber}</p>
              <p className="text-sm text-muted-foreground">Group: {user.insurance.groupNumber}</p>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Appointment Reminders</p>
                <p className="text-xs text-muted-foreground">Get notified about upcoming appointments</p>
              </div>
              <Switch
                checked={notifications.appointments}
                onCheckedChange={(checked) => setNotifications({ ...notifications, appointments: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Medication Reminders</p>
                <p className="text-xs text-muted-foreground">Daily medication reminders</p>
              </div>
              <Switch
                checked={notifications.reminders}
                onCheckedChange={(checked) => setNotifications({ ...notifications, reminders: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Promotional Offers</p>
                <p className="text-xs text-muted-foreground">Health tips and special offers</p>
              </div>
              <Switch
                checked={notifications.promotions}
                onCheckedChange={(checked) => setNotifications({ ...notifications, promotions: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Emergency Alerts</p>
                <p className="text-xs text-muted-foreground">Critical health alerts in your area</p>
              </div>
              <Switch
                checked={notifications.emergency}
                onCheckedChange={(checked) => setNotifications({ ...notifications, emergency: checked })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Settings & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Settings & Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Settings className="h-4 w-4 mr-3" />
              App Settings
              <ChevronRight className="h-4 w-4 ml-auto" />
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <HelpCircle className="h-4 w-4 mr-3" />
              Help & Support
              <ChevronRight className="h-4 w-4 ml-auto" />
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <FileText className="h-4 w-4 mr-3" />
              Privacy Policy
              <ChevronRight className="h-4 w-4 ml-auto" />
            </Button>
            <Separator />
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent text-red-600 border-red-200 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center p-2">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <div className="w-4 h-4 bg-muted-foreground rounded"></div>
            </div>
            <span className="text-xs text-muted-foreground">Home</span>
          </Link>
          <Link href="/map" className="flex flex-col items-center p-2">
            <MapPin className="w-6 h-6 mb-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Map</span>
          </Link>
          <Link href="/saved" className="flex flex-col items-center p-2">
            <Heart className="w-6 h-6 mb-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Saved</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2">
            <User className="w-6 h-6 mb-1 text-primary" />
            <span className="text-xs text-primary font-medium">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
