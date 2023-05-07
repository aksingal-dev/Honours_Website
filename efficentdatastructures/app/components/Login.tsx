import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";

export default function Login(){
    return(<>
    <div className="max-w-sm">
    <Card>
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          {/* Get username */}
          <Label
            htmlFor="UName1"
            value="Your User Name"
          />
        </div>
        <TextInput
          id="UName1"
          type="UserName"
          placeholder="Username"
          required={true}
        />
      </div>
      {/* Get password */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          required={true}
        />
      </div>
      <div className="flex flex-row items-center gap-2">
      <Button type="button">
        Register
      </Button>
      <Button type="submit">
        Log In
      </Button>
      </div>
    </form>
  </Card>
</div>
    </>
    )
}