"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Star,
  Clock,
  Calendar,
  Heart,
  Share2,
  Award,
  GraduationCap,
  Languages,
  Users,
  CheckCircle,
  MessageCircle,
  Video,
  Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const [isSaved, setIsSaved] = useState(false)
  const [selectedTab, setSelectedTab] = useState("about")

  // Mock doctor data - in real app this would come from API
  const doctor = {
    id: params.id,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    subSpecialty: "Interventional Cardiology",
    rating: 4.9,
    totalReviews: 324,
    experience: "15 years",
    image: "/female-doctor.png",
    hospital: "City General Hospital",
    hospitalId: "1",
    languages: ["English", "Spanish", "French"],
    education: [
      {
        degree: "MD - Doctor of Medicine",
        institution: "Harvard Medical School",
        year: "2009",
      },
      {
        degree: "Residency in Internal Medicine",
        institution: "Massachusetts General Hospital",
        year: "2012",
      },
      {
        degree: "Fellowship in Cardiology",
        institution: "Johns Hopkins Hospital",
        year: "2015",
      },
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease",
      "Board Certified in Interventional Cardiology",
      "Fellow of American College of Cardiology",
      "Advanced Cardiac Life Support (ACLS)",
      "Basic Life Support (BLS)",
    ],
    specializations: [
      "Coronary Angioplasty",
      "Cardiac Catheterization",
      "Heart Disease Prevention",
      "Hypertension Management",
      "Cholesterol Management",
      "Arrhythmia Treatment",
    ],
    about:
      "Dr. Sarah Johnson is a highly experienced interventional cardiologist with over 15 years of practice. She specializes in minimally invasive cardiac procedures and has performed over 2,000 successful cardiac catheterizations. Dr. Johnson is committed to providing personalized care and educating patients about heart health.",
    achievements: [
      "Top Doctor Award 2023 - City Medical Association",
      "Excellence in Patient Care Award 2022",
      "Published 25+ research papers in peer-reviewed journals",
      "Speaker at International Cardiology Conference 2023",
      "Mentor for Cardiology Fellows Program",
    ],
    availability: {
      nextAvailable: "Tomorrow, 2:00 PM",
      schedule: [
        { day: "Monday", hours: "9:00 AM - 5:00 PM" },
        { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
        { day: "Wednesday", hours: "9:00 AM - 3:00 PM" },
        { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
        { day: "Friday", hours: "9:00 AM - 4:00 PM" },
        { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
        { day: "Sunday", hours: "Closed" },
      ],
    },
    consultationFee: "$200 - $300",
    insurance: ["Blue Cross Blue Shield", "Aetna", "Medicare", "United Healthcare", "Cigna"],
    reviews: [
      {
        id: 1,
        author: "Michael R.",
        rating: 5,
        date: "1 week ago",
        comment:
          "Dr. Johnson is exceptional! She explained my heart condition clearly and the procedure went perfectly. I feel much better now.",
        helpful: 18,
        verified: true,
      },
      {
        id: 2,
        author: "Lisa K.",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Very professional and caring. She took time to answer all my questions and made me feel comfortable throughout the treatment.",
        helpful: 12,
        verified: true,
      },
      {
        id: 3,
        author: "David M.",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Great doctor with excellent expertise. The only downside was the wait time, but the quality of care made it worth it.",
        helpful: 8,
        verified: true,
      },
    ],
    patientStats: {
      totalPatients: "2,500+",
      successRate: "98%",
      returnPatients: "85%",
    },
  }

  const ratingBreakdown = [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link href={`/hospital/${doctor.hospitalId}`}>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent"
              onClick={() => setIsSaved(!isSaved)}
            >
              <Heart className={`h-4 w-4 ${isSaved ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="flex items-start space-x-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
            <AvatarFallback className="text-lg">
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h1>
            <p className="text-sm text-muted-foreground mb-1">{doctor.specialty}</p>
            <p className="text-xs text-muted-foreground mb-2">{doctor.subSpecialty}</p>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-accent fill-current mr-1" />
                <span className="font-medium text-foreground">{doctor.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">({doctor.totalReviews} reviews)</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {doctor.experience} experience
              </Badge>
            </div>
            <Link href={`/hospital/${doctor.hospitalId}`}>
              <p className="text-sm text-primary hover:underline">{doctor.hospital}</p>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <Card className="text-center">
            <CardContent className="p-3">
              <Users className="h-4 w-4 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Patients</p>
              <p className="text-sm font-medium">{doctor.patientStats.totalPatients}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-3">
              <CheckCircle className="h-4 w-4 text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Success Rate</p>
              <p className="text-sm font-medium">{doctor.patientStats.successRate}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-3">
              <Clock className="h-4 w-4 text-secondary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Next Available</p>
              <p className="text-sm font-medium">Tomorrow</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </Button>
          <Button variant="outline">
            <Video className="h-4 w-4 mr-2" />
            Video Consult
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-4">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about" className="text-xs">
              About
            </TabsTrigger>
            <TabsTrigger value="qualifications" className="text-xs">
              Credentials
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs">
              Reviews
            </TabsTrigger>
            <TabsTrigger value="schedule" className="text-xs">
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4 mt-4">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">About Dr. {doctor.name.split(" ")[1]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{doctor.about}</p>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                  Specializations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec) => (
                    <Badge key={spec} variant="outline" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Languages className="h-4 w-4 mr-2 text-accent" />
                  Languages Spoken
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language) => (
                    <Badge key={language} variant="secondary" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Award className="h-4 w-4 mr-2 text-accent" />
                  Achievements & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {doctor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qualifications" className="space-y-4 mt-4">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Award className="h-4 w-4 mr-2 text-accent" />
                  Board Certifications & Licenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {doctor.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-3" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Insurance Accepted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.insurance.map((insurance) => (
                    <Badge key={insurance} variant="outline" className="text-xs">
                      {insurance}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Consultation Fee */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Consultation Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">{doctor.consultationFee}</p>
                <p className="text-sm text-muted-foreground">
                  Fee may vary based on consultation type and insurance coverage
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4 mt-4">
            {/* Rating Summary */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-2xl font-bold mr-2">{doctor.rating}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= Math.floor(doctor.rating) ? "text-accent fill-current" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{doctor.totalReviews} patient reviews</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Write Review
                  </Button>
                </div>

                <div className="space-y-2">
                  {ratingBreakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-6">{item.stars}</span>
                      <Star className="h-3 w-3 text-accent fill-current" />
                      <Progress value={item.percentage} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground w-8">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            {doctor.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{review.author}</h4>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified Patient
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${star <= review.rating ? "text-accent fill-current" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{review.helpful} people found this helpful</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4 mt-4">
            {/* Next Available */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Next Available Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-lg text-primary">{doctor.availability.nextAvailable}</p>
                    <p className="text-sm text-muted-foreground">In-person consultation</p>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {doctor.availability.schedule.map((schedule, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-2">
                        <span className="font-medium text-sm">{schedule.day}</span>
                        <span
                          className={`text-sm ${schedule.hours === "Closed" ? "text-muted-foreground" : "text-foreground"}`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                      {index < doctor.availability.schedule.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Appointment Types */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Consultation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center">
                    <Stethoscope className="h-4 w-4 text-primary mr-3" />
                    <div>
                      <p className="font-medium text-sm">In-Person Consultation</p>
                      <p className="text-xs text-muted-foreground">Physical examination available</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Book
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center">
                    <Video className="h-4 w-4 text-accent mr-3" />
                    <div>
                      <p className="font-medium text-sm">Video Consultation</p>
                      <p className="text-xs text-muted-foreground">Online consultation via video call</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
