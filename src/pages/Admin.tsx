import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link, Routes, Route } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import AdminLogin from "./admin/AdminLogin";
import BrandKit from "./admin/BrandKit";
import FinancialStats from "./admin/FinancialStats";
import CommunityStats from "./admin/CommunityStats";
import TeamManagement from "./admin/TeamManagement";

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Check current auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      
      if (session) {
        checkAdminStatus(session.user.id);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
      
      if (session) {
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (error) throw error;
      
      setIsAdmin(!!data);
      
      if (!data) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-800"></div>
      </div>
    );
  }

  if (!session) {
    return <AdminLogin />;
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="mb-6">You don't have permission to access the admin area.</p>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
    );
  }

  // Determine active tab based on current path
  const getActiveTab = () => {
    const path = location.pathname;
    if (path.includes('/admin/brand-kit')) return 'brand-kit';
    if (path.includes('/admin/financial-stats')) return 'financial-stats';
    if (path.includes('/admin/community-stats')) return 'community-stats';
    if (path.includes('/admin/team')) return 'team';
    return 'dashboard';
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Signed in as {session.user.email}
          </span>
          <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
          <Button variant="outline" asChild>
            <Link to="/">Back to Site</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue={getActiveTab()} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger 
            value="dashboard" 
            onClick={() => navigate('/admin')}
            className="text-sm md:text-base"
          >
            Dashboard
          </TabsTrigger>
          <TabsTrigger 
            value="brand-kit" 
            onClick={() => navigate('/admin/brand-kit')}
            className="text-sm md:text-base"
          >
            Brand Kit
          </TabsTrigger>
          <TabsTrigger 
            value="financial-stats" 
            onClick={() => navigate('/admin/financial-stats')}
            className="text-sm md:text-base"
          >
            Financial Stats
          </TabsTrigger>
          <TabsTrigger 
            value="community-stats" 
            onClick={() => navigate('/admin/community-stats')}
            className="text-sm md:text-base"
          >
            Community Stats
          </TabsTrigger>
          <TabsTrigger 
            value="team" 
            onClick={() => navigate('/admin/team')}
            className="text-sm md:text-base"
          >
            Team
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Kit</CardTitle>
                <CardDescription>Manage your organization's brand assets</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link to="/admin/brand-kit">Manage Brand Kit</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Financial Stats</CardTitle>
                <CardDescription>View financial performance for shows and venues</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link to="/admin/financial-stats">View Financials</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
                <CardDescription>Analyze community engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link to="/admin/community-stats">View Community</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>Manage staff and admin accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link to="/admin/team">Manage Team</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/brand-kit" element={<BrandKit />} />
          <Route path="/financial-stats" element={<FinancialStats />} />
          <Route path="/community-stats" element={<CommunityStats />} />
          <Route path="/team" element={<TeamManagement />} />
        </Routes>
      </Tabs>
    </div>
  );
};

export default Admin;
