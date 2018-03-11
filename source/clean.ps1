[CmdletBinding(SupportsShouldProcess=$true)] PARAM()
ls -File $PSScriptRoot/../ |? {$_.name -inotmatch '^\..*|README.md|source'} | rm -WhatIf:$WhatIfPreference -Confirm:$ConfirmPreference
ls -Directory $PSScriptRoot/../ |? {$_.name -inotmatch '^\..*|README.md|source'} | rm -WhatIf:$WhatIfPreference -Confirm:$ConfirmPreference -Recurse