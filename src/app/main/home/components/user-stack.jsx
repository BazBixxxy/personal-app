import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserStack = () => {
  const users = [
    { src: "https://github.com/haydenbleasel.png", fallback: "HB" },
    { src: "https://github.com/shadcn.png", fallback: "CN" },
    { src: "https://github.com/leerob.png", fallback: "LR" },
    { src: "https://github.com/serafimcloud.png", fallback: "SC" },
  ];

  return (
    <div className="flex -space-x-2">
      {users.map((user, index) => (
        <Avatar key={index} className="border-2 border-background">
          <AvatarImage src={user.src} />
          <AvatarFallback>{user.fallback}</AvatarFallback>
        </Avatar>
      ))}
      <div className="flex items-center justify-center w-10 h-10 ml-2 text-xs font-medium rounded-full bg-muted text-muted-foreground">
        +10k
      </div>
    </div>
  );
};

export default UserStack;
