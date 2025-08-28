"use client"

import { useState } from "react"
import { Phone, MapPin, Navigation, Clock, AlertTriangle, Heart, Shield, Star, ArrowLeft, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function EmergencyPage() {
  const [emergencyType, setEmergencyType] = useState<string | null>(null)

  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "911",
      description: "Police, Fire, Ambulance",
      color: "bg-destructive text-destructive-foreground",
      icon: Phone,
    },
    {
      name: "Poison Control",
      number: "1-800-222-1222",
      description: "24/7 Poison Help",
      color: "bg-orange-500 text-white",
      icon: AlertTriangle,
    },
    {
      name: "Crisis Hotline",
      number: "988",
      description: "Mental Health Crisis",
      color: "bg-blue-500 text-white",
      icon: Heart,
    },
  ]

  const nearestERs = [
    {
      id: 1,
      name: "City General Emergency",
      distance: "0.8 km",
      waitTime: "8 min",
      rating: 4.8,
      address: "123 Medical Center Dr",
      phone: "+1 (555) 123-4567",
      trauma: "Level 1",
      image: "/modern-hospital-exterior.png",
    },
    {
      id: 2,
      name: "MedCare Emergency Center",
      distance: "1.2 km",
      waitTime: "12 min",
      rating: 4.6,
      address: "456 Emergency Ave",
      phone: "+1 (555) 987-6543",
      trauma: "Level 2",
      image: "/medical-center-ambulance.png",
    },
    {
      id: 3,
      name: "Regional Medical Emergency",
      distance: "2.1 km",
      waitTime: "15 min",
      rating: 4.7,
      address: "789 Health St",
      phone: "+1 (555) 456-7890",
      trauma: "Level 1",
      image: "/clean-modern-clinic.png",
    },
  ]

  const emergencyTypes = [
    {
      type: "chest-pain",
      title: "Chest Pain",
      icon: Heart,
      color: "bg-red-100 text-red-700 border-red-200",
      urgency: "Call 911 immediately",
    },
    {
      type: "breathing",
      title: "Difficulty Breathing",
      icon: AlertTriangle,
      color: "bg-orange-100 text-orange-700 border-orange-200",
      urgency: "Call 911 immediately",
    },
    {
      type: "injury",
      title: "Severe Injury",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
      urgency: "Seek immediate care",
    },
    {
      type: "other",
      title: "Other Emergency",
      icon: Phone,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      urgency: "Call 911 if unsure",
    },
  ]

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`
  }

  const handleDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/?q=${encodedAddress}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-destructive text-destructive-foreground px-4 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/">
            <Button variant="secondary" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold">Emergency Help</h1>
            <p className="text-sm opacity-90">Get immediate medical assistance</p>
          </div>
        </div>

        <Alert className="bg-destructive-foreground/10 border-destructive-foreground/20 text-destructive-foreground">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="font-medium">
            If this is a life-threatening emergency, call 911 immediately
          </AlertDescription>
        </Alert>
      </header>

      <div className="px-4 py-6 space-y-6">
        {/* Emergency Contacts */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Emergency Contacts</h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full ${contact.color} flex items-center justify-center`}>
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleEmergencyCall(contact.number)}
                      className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                    >
                      Call {contact.number}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Type Selection */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">What's your emergency?</h2>
          <div className="grid grid-cols-2 gap-3">
            {emergencyTypes.map((emergency) => (
              <Card
                key={emergency.type}
                className={`cursor-pointer transition-all ${
                  emergencyType === emergency.type ? "ring-2 ring-primary border-primary" : "hover:shadow-md"
                }`}
                onClick={() => setEmergencyType(emergency.type)}
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${emergency.color} flex items-center justify-center mx-auto mb-2`}
                  >
                    <emergency.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{emergency.title}</h3>
                  <p className="text-xs text-muted-foreground">{emergency.urgency}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearest Emergency Rooms */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Nearest Emergency Rooms</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              <MapPin className="h-4 w-4 mr-1" />
              Map View
            </Button>
          </div>

          <div className="space-y-4">
            {nearestERs.map((er) => (
              <Card key={er.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex">
                    <img
                      src={er.image || "/placeholder.svg"}
                      alt={er.name}
                      className="w-20 h-20 object-cover rounded-l-lg"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-sm">{er.name}</h3>
                          <p className="text-xs text-muted-foreground">{er.address}</p>
                        </div>
                        <div className="flex items-center ml-2">
                          <Star className="h-3 w-3 text-accent fill-current mr-1" />
                          <span className="text-xs font-medium">{er.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            {er.trauma}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {er.distance}
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {er.waitTime} wait
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEmergencyCall(er.phone)}
                          className="flex-1 h-7 text-xs"
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleDirections(er.address)}
                          className="flex-1 h-7 text-xs bg-primary hover:bg-primary/90"
                        >
                          <Navigation className="h-3 w-3 mr-1" />
                          Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Tips */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Emergency Tips</h2>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Stay Calm</h4>
                    <p className="text-xs text-muted-foreground">Take deep breaths and try to remain calm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Call for Help</h4>
                    <p className="text-xs text-muted-foreground">Don't hesitate to call 911 if unsure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Provide Information</h4>
                    <p className="text-xs text-muted-foreground">
                      Share your location and describe the situation clearly
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
