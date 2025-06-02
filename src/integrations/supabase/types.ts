export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      artists: {
        Row: {
          artist_name: string
          bio: string | null
          created_at: string | null
          genre: string
          id: string
          social_links: Json | null
          status: string | null
          user_id: string
        }
        Insert: {
          artist_name: string
          bio?: string | null
          created_at?: string | null
          genre: string
          id?: string
          social_links?: Json | null
          status?: string | null
          user_id: string
        }
        Update: {
          artist_name?: string
          bio?: string | null
          created_at?: string | null
          genre?: string
          id?: string
          social_links?: Json | null
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      HostOffer: {
        Row: {
          address: string
          availableDates: string[] | null
          capacity: number
          city: string
          createdAt: string
          hostId: string
          id: string
          latitude: number | null
          longitude: number | null
          notes: string | null
          state: string
          status: Database["public"]["Enums"]["OfferStatus"]
          tourId: string
          updatedAt: string
          zipCode: string
        }
        Insert: {
          address: string
          availableDates?: string[] | null
          capacity: number
          city: string
          createdAt?: string
          hostId: string
          id: string
          latitude?: number | null
          longitude?: number | null
          notes?: string | null
          state: string
          status?: Database["public"]["Enums"]["OfferStatus"]
          tourId: string
          updatedAt: string
          zipCode: string
        }
        Update: {
          address?: string
          availableDates?: string[] | null
          capacity?: number
          city?: string
          createdAt?: string
          hostId?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          notes?: string | null
          state?: string
          status?: Database["public"]["Enums"]["OfferStatus"]
          tourId?: string
          updatedAt?: string
          zipCode?: string
        }
        Relationships: [
          {
            foreignKeyName: "HostOffer_hostId_fkey"
            columns: ["hostId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "HostOffer_tourId_fkey"
            columns: ["tourId"]
            isOneToOne: false
            referencedRelation: "Tour"
            referencedColumns: ["id"]
          },
        ]
      }
      releases: {
        Row: {
          artist_id: string
          cover_url: string | null
          created_at: string | null
          genre: string
          id: string
          release_date: string
          status: string | null
          title: string
          type: string
        }
        Insert: {
          artist_id: string
          cover_url?: string | null
          created_at?: string | null
          genre: string
          id?: string
          release_date: string
          status?: string | null
          title: string
          type: string
        }
        Update: {
          artist_id?: string
          cover_url?: string | null
          created_at?: string | null
          genre?: string
          id?: string
          release_date?: string
          status?: string | null
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "releases_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      Tour: {
        Row: {
          artistId: string
          createdAt: string
          endDate: string
          id: string
          loadInTime: string
          maxDrivingMiles: number
          maxShowsPerDay: number
          name: string
          startDate: string
          status: Database["public"]["Enums"]["TourStatus"]
          updatedAt: string
        }
        Insert: {
          artistId: string
          createdAt?: string
          endDate: string
          id: string
          loadInTime?: string
          maxDrivingMiles?: number
          maxShowsPerDay?: number
          name: string
          startDate: string
          status?: Database["public"]["Enums"]["TourStatus"]
          updatedAt: string
        }
        Update: {
          artistId?: string
          createdAt?: string
          endDate?: string
          id?: string
          loadInTime?: string
          maxDrivingMiles?: number
          maxShowsPerDay?: number
          name?: string
          startDate?: string
          status?: Database["public"]["Enums"]["TourStatus"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Tour_artistId_fkey"
            columns: ["artistId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      tracks: {
        Row: {
          created_at: string | null
          duration: number | null
          file_url: string | null
          id: string
          release_id: string
          title: string
          track_number: number
        }
        Insert: {
          created_at?: string | null
          duration?: number | null
          file_url?: string | null
          id?: string
          release_id: string
          title: string
          track_number: number
        }
        Update: {
          created_at?: string | null
          duration?: number | null
          file_url?: string | null
          id?: string
          release_id?: string
          title?: string
          track_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "tracks_release_id_fkey"
            columns: ["release_id"]
            isOneToOne: false
            referencedRelation: "releases"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          createdAt: string
          email: string
          id: string
          isArtist: boolean
          name: string | null
          phone: string | null
        }
        Insert: {
          createdAt?: string
          email: string
          id: string
          isArtist?: boolean
          name?: string | null
          phone?: string | null
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          isArtist?: boolean
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      OfferStatus: "PENDING" | "ACCEPTED" | "REJECTED" | "CONFIRMED"
      TourStatus:
        | "PLANNING"
        | "ACCEPTING_OFFERS"
        | "ROUTING"
        | "CONFIRMED"
        | "COMPLETED"
        | "CANCELLED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      OfferStatus: ["PENDING", "ACCEPTED", "REJECTED", "CONFIRMED"],
      TourStatus: [
        "PLANNING",
        "ACCEPTING_OFFERS",
        "ROUTING",
        "CONFIRMED",
        "COMPLETED",
        "CANCELLED",
      ],
    },
  },
} as const
