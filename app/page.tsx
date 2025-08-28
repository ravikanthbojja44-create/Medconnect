"use client"

import { useState } from "react"
import { Search, MapPin, Phone, Star, Clock, Shield, Heart, Stethoscope, Pill, Ambulance } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CareNavHome() {
  const [searchQuery, setSearchQuery] = useState("")

  const quickServices = [
    { icon: Stethoscope, label: "General Medicine", color: "bg-primary text-primary-foreground" },
    { icon: Heart, label: "Cardiology", color: "bg-accent text-accent-foreground" },
    { icon: Pill, label: "Pharmacy", color: "bg-secondary text-secondary-foreground" },
    { icon: Ambulance, label: "Emergency", color: "bg-destructive text-destructive-foreground" },
  ]

  const nearbyHospitals = [
    {
      name: "City General Hospital",
      specialty: "Multi-specialty",
      rating: 4.8,
      distance: "0.8 km",
      hygiene: "A+",
      waitTime: "15 min",
      image: "/modern-hospital-exterior.png",
    },
    {
      name: "MedCare Center",
      specialty: "Emergency Care",
      rating: 4.6,
      distance: "1.2 km",
      hygiene: "A",
      waitTime: "8 min",
      image: "/medical-center-ambulance.png",
    },
    {
      name: "Wellness Clinic",
      specialty: "Primary Care",
      rating: 4.7,
      distance: "2.1 km",
      hygiene: "A+",
      waitTime: "25 min",
      image: "/clean-modern-clinic.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">CareNav</h1>
              <p className="text-sm text-muted-foreground">Find trusted healthcare nearby</p>
            </div>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <MapPin className="h-4 w-4" />
            </Button>
          </div>

          {/* Search Bar */}
          <Link href="/search">
            <div className="relative cursor-pointer">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search hospitals, doctors, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border focus:ring-ring pointer-events-none"
                readOnly
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Emergency Alert */}
      <div className="bg-destructive/10 border-l-4 border-destructive px-4 py-3 mx-4 mt-4 rounded-r-lg">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-destructive mr-3" />
          <div>
            <p className="text-sm font-medium text-destructive">Emergency? Call 911</p>
            <p className="text-xs text-destructive/80">Or tap here for nearest emergency room</p>
          </div>
        </div>
      </div>

      {/* Quick Services */}
      <section className="px-4 py-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Services</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickServices.map((service, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div
                  className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mx-auto mb-2`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-foreground">{service.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Nearby Hospitals */}
      <section className="px-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Nearby Hospitals</h2>
          <Link href="/search">
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {nearbyHospitals.map((hospital, index) => (
            <Link key={index} href={`/hospital/${index + 1}`}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex">
                    <img
                      src={hospital.image || "/placeholder.svg"}
                      alt={hospital.name}
                      className="w-20 h-20 object-cover rounded-l-lg"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground text-sm">{hospital.name}</h3>
                          <p className="text-xs text-muted-foreground">{hospital.specialty}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-accent fill-current mr-1" />
                          <span className="text-xs font-medium text-foreground">{hospital.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            {hospital.hygiene}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {hospital.distance}
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {hospital.waitTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around">
            {[
              { icon: Search, label: "Search", active: true, href: "/search" },
              { icon: MapPin, label: "Map", active: false, href: "/map" },
              { icon: Heart, label: "Saved", active: false, href: "/saved" },
              { icon: Stethoscope, label: "Profile", active: false, href: "/profile" },
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <button
                  className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                    item.active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-5 w-5 mb-1" />
                  <span className="text-xs">{item.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
