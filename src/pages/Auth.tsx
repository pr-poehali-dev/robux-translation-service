import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const Auth = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="bg-white/20 rounded-lg p-3 mb-4">
              <span className="text-white font-bold text-2xl">FUNPAY</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-white">Авторизация</h1>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-center">
              Вход в систему
            </CardTitle>
            <CardDescription className="text-blue-100 text-center">
              Введите ваши данные для получения робуксов
            </CardDescription>
          </CardHeader>

          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login" className="text-white">
                    Логин
                  </Label>
                  <Input
                    id="login"
                    name="login"
                    type="text"
                    required
                    value={formData.login}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    placeholder="Введите логин"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Пароль
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    placeholder="Введите пароль"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Почта
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    placeholder="Введите email"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3"
                >
                  <Icon name="Check" className="mr-2" size={18} />
                  Подтвердить
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <Alert className="bg-green-500/20 border-green-400/30">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-400" />
                  <AlertDescription className="text-green-100">
                    Ваши робуксы будут зачислены на аккаунт в течение 2-3 дней
                  </AlertDescription>
                </Alert>

                <div className="text-center">
                  <Link to="/">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                    >
                      <Icon name="ArrowLeft" className="mr-2" size={18} />
                      Вернуться на главную
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
