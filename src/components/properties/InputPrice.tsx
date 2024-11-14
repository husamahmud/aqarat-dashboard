import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function InputPrice() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-13 [direction:rtl]">مبلغ الايجار اليومي</Label>
      <div className="relative">
        <Input
          id="input-13"
          className="pe-12 ps-6 [direction:rtl]"
          placeholder="ادخل السعر"
          type="text"
        />
        <span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
          ر.س
        </span>
      </div>
    </div>
  )
}
