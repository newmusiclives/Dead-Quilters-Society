import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Mock data for demonstration
const mockTeamMembers = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", role: "Admin", department: "Management", status: "Active" },
  { id: 2, name: "Michael Chen", email: "michael@example.com", role: "Staff", department: "Production", status: "Active" },
  { id: 3, name: "Emily Rodriguez", email: "emily@example.com", role: "Staff", department: "Education", status: "Active" },
  { id: 4, name: "David Kim", email: "david@example.com", role: "Admin", department: "Technology", status: "Active" },
  { id: 5, name: "Jessica Taylor", email: "jessica@example.com", role: "Staff", department: "Marketing", status: "Inactive" },
];

const mockRoles = [
  { id: 1, name: "Admin", permissions: ["manage_users", "manage_content", "view_stats", "manage_settings"] },
  { id: 2, name: "Staff", permissions: ["view_content", "edit_content", "view_stats"] },
  { id: 3, name: "Contributor", permissions: ["view_content", "submit_content"] },
  { id: 4, name: "Viewer", permissions: ["view_content"] },
];

const mockDepartments = [
  "Management",
  "Production",
  "Education",
  "Technology",
  "Marketing",
  "Finance",
  "Community Outreach",
];

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("team");
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isAddRoleOpen, setIsAddRoleOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  // Form states
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    isAdmin: false,
  });
  
  const [newRole, setNewRole] = useState({
    name: "",
    permissions: {
      manage_users: false,
      manage_content: false,
      view_stats: false,
      manage_settings: false,
      edit_content: false,
      submit_content: false,
      view_content: false,
    },
  });
  
  const filteredTeamMembers = mockTeamMembers.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.department.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAddMember = async () => {
    try {
      // In a real app, this would add the user to the database
      // For demo purposes, we'll just show a success message
      
      // If the user is an admin, we would also add them to the admins table
      if (newMember.isAdmin) {
        // This is where you would add the user to the admins table
        // For demo purposes, we'll just show a success message
      }
      
      toast({
        title: "Team Member Added",
        description: `${newMember.name} has been added as a ${newMember.role}.`,
      });
      
      setIsAddMemberOpen(false);
      setNewMember({
        name: "",
        email: "",
        role: "",
        department: "",
        isAdmin: false,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error adding the team member.",
        variant: "destructive",
      });
    }
  };
  
  const handleAddRole = () => {
    // In a real app, this would add the role to the database
    toast({
      title: "Role Added",
      description: `${newRole.name} role has been created.`,
    });
    
    setIsAddRoleOpen(false);
    setNewRole({
      name: "",
      permissions: {
        manage_users: false,
        manage_content: false,
        view_stats: false,
        manage_settings: false,
        edit_content: false,
        submit_content: false,
        view_content: false,
      },
    });
  };
  
  const handleDeleteMember = (id: number, name: string) => {
    // In a real app, this would delete the user from the database
    toast({
      title: "Team Member Removed",
      description: `${name} has been removed from the team.`,
    });
  };
  
  const handleStatusChange = (id: number, name: string, currentStatus: string) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    // In a real app, this would update the user's status in the database
    toast({
      title: "Status Updated",
      description: `${name}'s status has been changed to ${newStatus}.`,
    });
  };

  return (
    <TabsContent value="team" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Team Management</h2>
        <Button onClick={() => setIsAddMemberOpen(true)}>Add Team Member</Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="team">Team Members</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
        </TabsList>
        
        {/* Team Members Tab */}
        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Manage your organization's team members</CardDescription>
                </div>
                <div className="w-64">
                  <Input
                    placeholder="Search members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 p-4 font-medium border-b">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Role</div>
                  <div>Department</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>
                {filteredTeamMembers.length > 0 ? (
                  filteredTeamMembers.map(member => (
                    <div key={member.id} className="grid grid-cols-6 p-4 border-b last:border-0">
                      <div className="font-medium">{member.name}</div>
                      <div>{member.email}</div>
                      <div>{member.role}</div>
                      <div>{member.department}</div>
                      <div>
                        <span 
                          className={`px-2 py-1 rounded-full text-xs ${
                            member.status === "Active" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {member.status}
                        </span>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleStatusChange(member.id, member.name, member.status)}
                        >
                          {member.status === "Active" ? "Deactivate" : "Activate"}
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteMember(member.id, member.name)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-muted-foreground">
                    No team members found matching your search.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
              <CardDescription>Team distribution across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Members by Department</h3>
                  <div className="space-y-4">
                    {mockDepartments.map((department, index) => {
                      const count = mockTeamMembers.filter(m => m.department === department).length;
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span>{department}</span>
                            <span>{count} {count === 1 ? 'member' : 'members'}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-amber-800 h-2.5 rounded-full" 
                              style={{ 
                                width: `${(count / mockTeamMembers.length) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Members by Role</h3>
                  <div className="space-y-4">
                    {mockRoles.map((role, index) => {
                      const count = mockTeamMembers.filter(m => m.role === role.name).length;
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span>{role.name}</span>
                            <span>{count} {count === 1 ? 'member' : 'members'}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-amber-800 h-2.5 rounded-full" 
                              style={{ 
                                width: `${(count / mockTeamMembers.length) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Roles & Permissions Tab */}
        <TabsContent value="roles" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Roles & Permissions</CardTitle>
                  <CardDescription>Manage roles and their associated permissions</CardDescription>
                </div>
                <Button onClick={() => setIsAddRoleOpen(true)}>Add New Role</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockRoles.map(role => (
                  <Card key={role.id}>
                    <CardHeader>
                      <CardTitle>{role.name}</CardTitle>
                      <CardDescription>
                        {role.permissions.length} permissions assigned
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {role.permissions.map((permission, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <span>{permission.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2">
                      <Button variant="outline">Edit Role</Button>
                      {role.name !== "Admin" && (
                        <Button variant="destructive">Delete Role</Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Permission Definitions</CardTitle>
              <CardDescription>Explanation of available permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Manage Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Add, edit, and remove team members. Assign roles and departments.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Manage Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Create, publish, and delete content across the platform.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">View Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Access financial, community, and performance statistics.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Manage Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Configure system settings, branding, and global preferences.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Edit Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Modify existing content but cannot create or delete.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Submit Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Create and submit content for approval by editors.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">View Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Access and view content but cannot make changes.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Add Team Member Dialog */}
      <Dialog open={isAddMemberOpen} onOpenChange={setIsAddMemberOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Team Member</DialogTitle>
            <DialogDescription>
              Add a new member to your team. They will receive an email invitation.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={newMember.email}
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select 
                value={newMember.role} 
                onValueChange={(value) => setNewMember({ ...newMember, role: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  {mockRoles.map(role => (
                    <SelectItem key={role.id} value={role.name}>
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="department" className="text-right">
                Department
              </Label>
              <Select 
                value={newMember.department} 
                onValueChange={(value) => setNewMember({ ...newMember, department: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {mockDepartments.map((dept, index) => (
                    <SelectItem key={index} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isAdmin" className="text-right">
                Admin Access
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                <Switch
                  id="isAdmin"
                  checked={newMember.isAdmin}
                  onCheckedChange={(checked) => setNewMember({ ...newMember, isAdmin: checked })}
                />
                <Label htmlFor="isAdmin">Grant admin privileges</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddMemberOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddMember}>Add Member</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Add Role Dialog */}
      <Dialog open={isAddRoleOpen} onOpenChange={setIsAddRoleOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Role</DialogTitle>
            <DialogDescription>
              Define a new role with specific permissions.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="roleName" className="text-right">
                Role Name
              </Label>
              <Input
                id="roleName"
                value={newRole.name}
                onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Permissions</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="manage_users"
                    checked={newRole.permissions.manage_users}
                    onCheckedChange={(checked) => 
                      setNewRole({ 
                        ...newRole, 
                        permissions: { ...newRole.permissions, manage_users: checked } 
                      })
                    }
                  />
                  <Label htmlFor="manage_users">Manage Users</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="manage_content"
                    checked={newRole.permissions.manage_content}
                    onCheckedChange={(checked) => 
                      setNewRole({ 
                        ...newRole, 
                        permissions: { ...newRole.permissions, manage_content: checked } 
                      })
                    }
                  />
                  <Label htmlFor="manage_content">Manage Content</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="view_stats"
                    checked={newRole.permissions.view_stats}
                    onCheckedChange={(checked) => 
                      setNewRole({ 
                        ...newRole, 
                        permissions: { ...newRole.permissions, view_stats: checked } 
                      })
                    }
                  />
                  <Label htmlFor="view_stats">View Stats</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="manage_settings"
                    checked={newRole.permissions.manage_settings}
                    onCheckedChange={(checked) => 
                      setNewRole({ 
                        ...newRole, 
                        permissions: { ...newRole.permissions, manage_settings: checked } 
                      })
                    }
                  />
                  <Label htmlFor="manage_settings">Manage Settings</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="edit_content"
                    checked={newRole.permissions.edit_content}
                    onCheckedChange={(checked) => 
                      setNewRole({ 
                        ...newRole, 
                        permissions: { ...newRole.permissions, edit_content: checked } 
                      })
                    }
                  />
                  <Label htmlFor="edit_content">Edit Content</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="submit_content"
                    checked={newRole.permissions.submit_content}
                    onCheckedChange={(checked) => 
                      setNewRole({ 
                        ...newRole, 
                        permissions: { ...newRole.permissions, submit_content: checked } 
                      })
                    }
                  />
                  <Label htmlFor="submit_content">Submit Content</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="view_content"
                    checked={newRole.permissions.view_content}
                    onCheckedChange={(checked) => 
                      setNewRole({ 
                        ...newRole, 
                        permissions: { ...newRole.permissions, view_content: checked } 
                      })
                    }
                  />
                  <Label htmlFor="view_content">View Content</Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddRoleOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddRole}>Create Role</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TabsContent>
  );
};

export default TeamManagement;
