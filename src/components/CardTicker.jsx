"'use client'";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Briefcase, DollarSign } from "lucide-react"

export function CardTicker({
  ticker,
  currentPrice,
  children
}) {
  return (
    (<Card className="w-full max-w-md mx-auto m-7">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold">{children}</CardTitle>
        <p className="text-sm text-muted-foreground">{ticker}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Valor Atual</p>
              <p className="text-3xl font-bold">${currentPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-5 w-5 text-gray-500" />
            <p className="text-sm text-muted-foreground">Empresa</p>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5 text-gray-500" />
            <p className="text-sm text-muted-foreground">Ação</p>
          </div>
        </div>
      </CardContent>
    </Card>)
  );
}