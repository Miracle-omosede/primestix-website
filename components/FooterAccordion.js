import React from 'react'

const FooterAccordion = () => {
  return (
    <div>
        <ul className='accordion'>
            <li>
                <input type="radio" name='accordion' id="first" checked />
                <label for="first"> Products </label>
                <div className='content'>
                    <p>
                        lorem vsdfwdfqwefWEFWDVSFVWERFWEFEFWDFGBSDFBDFDsdkvdnfsfnsfidndf jknsfkdnfskfn kndksndknskdn skdnskdnsk
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id="second" />
                <label for="first"> Products </label>
                <div className='content'>
                    <p>
                        lorem vsdfwdfqwefWEFWDVSFVWERFWEFEFWDFGBSDFBDFDsdkvdnfsfnsfidndf jknsfkdnfskfn kndksndknskdn skdnskdnsk
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id="third" />
                <label for="first"> Products </label>
                <div className='content'>
                    <p>
                        lorem vsdfwdfqwefWEFWDVSFVWERFWEFEFWDFGBSDFBDFDsdkvdnfsfnsfidndf jknsfkdnfskfn kndksndknskdn skdnskdnsk
                    </p>
                </div>
            </li>
            <li>
                <input type="radio" name='accordion' id="fourth" />
                <label for="first"> Products </label>
                <div className='content'>
                    <p>
                        lorem vsdfwdfqwefWEFWDVSFVWERFWEFEFWDFGBSDFBDFDsdkvdnfsfnsfidndf jknsfkdnfskfn kndksndknskdn skdnskdnsk
                    </p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default FooterAccordion