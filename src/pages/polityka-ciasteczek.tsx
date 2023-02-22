import { HeroSmall } from "../components/Hero/Heroes";
import { XlContainer } from "../components/Global/Containers";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

const Cookie = () => {
    return (
        <>
            <HeroSmall variant="0"/>
            <XlContainer className="my-4 md:my-8 xl:my-12">
                <div className="border-purple-300  border-[4px] rounded-3xl p-8 flex flex-col">

                    <h3 className="font-rubikbold text-2xl md:text-3xl xl:text-4xl text-purple-900 mb-10">Polityka ciasteczek</h3>

                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Czym są ciasteczka?</p>
                    <p className="text-base md:text-lg mb-8">Zgodnie z powszechną praktyką w przypadku prawie wszystkich profesjonalnych witryn internetowych, ta witryna wykorzystuje pliki cookie, które są małymi plikami pobieranymi na Twój komputer, aby poprawić Twoje wrażenia. Na tej stronie opisano, jakie informacje zbierają, jak je wykorzystujemy i dlaczego czasami musimy przechowywać te pliki cookie. Udostępnimy również, w jaki sposób można zapobiec przechowywaniu tych plików cookie, jednak może to obniżyć lub „zepsuć” niektóre elementy funkcjonalności witryn.</p>
                    
                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Jak używamy ciasteczek?</p>
                    <p className="text-base md:text-lg mb-8">Używamy plików cookie z różnych powodów wyszczególnionych poniżej. Niestety w większości przypadków nie ma standardowych branżowych opcji wyłączania plików cookie bez całkowitego wyłączania funkcjonalności i funkcji dodawanych do tej witryny. Zaleca się pozostawienie wszystkich plików cookie, jeśli nie jesteś pewien, czy ich potrzebujesz, czy nie w przypadku, gdy są one wykorzystywane do świadczenia usługi, z której korzystasz.</p>
                   
                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Wyłączenie ciasteczek</p>
                    <p className="text-base md:text-lg mb-8">Możesz zapobiec ustawianiu plików cookie, dostosowując ustawienia w swojej przeglądarce (zobacz Pomoc przeglądarki, aby dowiedzieć się, jak to zrobić). Pamiętaj, że wyłączenie plików cookie wpłynie na funkcjonalność tej i wielu innych witryn, które odwiedzasz. Wyłączenie plików cookie zwykle skutkuje również wyłączeniem niektórych funkcji i funkcji tej witryny. Dlatego zaleca się, aby nie wyłączać plików cookie. Niniejsza Polityka plików cookie została stworzona przy pomocy firmy <Link className="text-purple-300" href="https://www.cookiepolicygenerator.com/cookie-policy-generator/" target='_blank' >Cookies Policy Generator</Link>.</p>
                    
                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Ciasteczka, z których korzystamy</p>

                    <ul>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Ciasteczka związane z kontem</p>
                            <p className="text-base md:text-lg mb-8">Jeśli utworzysz u nas konto, będziemy używać plików cookie do zarządzania procesem rejestracji i ogólnej administracji. Te pliki cookie są zwykle usuwane po wylogowaniu, jednak w niektórych przypadkach mogą pozostać później, aby zapamiętać preferencje witryny po wylogowaniu.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Ciasteczka związane z logowaniem</p>
                            <p className="text-base md:text-lg mb-8">Używamy ciasteczek, gdy jesteś zalogowany, abyśmy pamiętali o tym fakcie. Zapobiega to konieczności logowania się za każdym razem, gdy odwiedzasz nową stronę. Te pliki cookie są zazwyczaj usuwane lub czyszczone po wylogowaniu, aby zapewnić dostęp do zastrzeżonych funkcji i obszarów tylko po zalogowaniu.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Ciasteczka związane z ankietami</p>
                            <p className="text-base md:text-lg mb-8">Od czasu do czasu oferujemy ankiety i kwestionariusze dla użytkowników, aby zapewnić interesujące spostrzeżenia, pomocne narzędzia lub dokładniej zrozumieć naszą bazę użytkowników. Ankiety te mogą wykorzystywać pliki cookie do zapamiętywania, kto już brał udział w ankiecie lub do dostarczania dokładnych wyników po zmianie stron.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Ciasteczka związane z formularzami</p>
                            <p className="text-base md:text-lg mb-8">Gdy przesyłasz dane za pośrednictwem formularza, takiego jak te znajdujące się na stronach kontaktowych lub formularzach komentarzy, pliki cookie mogą zapamiętywać dane użytkownika na potrzeby przyszłej korespondencji.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Ciasteczka związane z preferencjami witryny</p>
                            <p className="text-base md:text-lg mb-8">Aby zapewnić Ci doskonałe wrażenia z korzystania z tej witryny, udostępniamy funkcję ustawiania preferencji dotyczących sposobu działania tej witryny podczas korzystania z niej. Aby zapamiętać Twoje preferencje, musimy ustawić pliki cookie, aby te informacje mogły być wywoływane za każdym razem, gdy Twoje preferencje wpływają na interakcję ze stroną.</p>
                        </li>

                    </ul>

                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Pliki cookie stron trzecich</p>
                    <p className="text-base md:text-lg mb-8">W niektórych szczególnych przypadkach używamy również plików cookie dostarczanych przez zaufane strony trzecie. Poniższa sekcja zawiera szczegółowe informacje na temat plików cookie stron trzecich, które możesz napotkać za pośrednictwem tej witryny.</p>

                    <ul>

                        <li>
                            <p className="text-base md:text-lg mb-8">Ta strona korzysta z Google Analytics, które jest jednym z najbardziej rozpowszechnionych i zaufanych rozwiązań analitycznych w sieci, które pomaga nam zrozumieć, w jaki sposób korzystasz z witryny i jak możemy poprawić Twoje wrażenia. Te pliki cookie mogą śledzić takie rzeczy, jak czas spędzony w witrynie i odwiedzane strony, dzięki czemu możemy nadal tworzyć interesujące treści.</p>
                            <p className="text-base md:text-lg mb-8">Więcej informacji na temat plików cookie Google Analytics można znaleźć na oficjalnej stronie Google Analytics.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">Od czasu do czasu testujemy nowe funkcje i wprowadzamy subtelne zmiany w sposobie dostarczania witryny. Kiedy wciąż testujemy nowe funkcje, te pliki cookie mogą być używane w celu zapewnienia spójnego korzystania z witryny, a jednocześnie upewnienia się, że rozumiemy, które optymalizacje nasi użytkownicy cenią sobie najbardziej.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">Ponieważ sprzedajemy produkty, ważne jest dla nas zrozumienie statystyk dotyczących liczby osób odwiedzających naszą witrynę, które faktycznie dokonują zakupu, i jako takie są to dane, które będą śledzone przez te pliki cookie. Jest to dla Ciebie ważne, ponieważ oznacza, że ​​możemy dokładnie prognozować biznes, co pozwala nam monitorować koszty naszych reklam i produktów, aby zapewnić najlepszą możliwą cenę.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">Usługa Google AdSense, której używamy do wyświetlania reklam, wykorzystuje plik cookie DoubleClick, aby wyświetlać trafniejsze reklamy w Internecie i ograniczać liczbę wyświetleń danej reklamy.</p>
                            <p className="text-base md:text-lg mb-8">Aby uzyskać więcej informacji na temat Google AdSense, zobacz oficjalne często zadawane pytania dotyczące prywatności Google AdSense.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">Używamy reklam, aby zrekompensować koszty prowadzenia tej witryny i zapewnić fundusze na dalszy rozwój. Pliki cookie reklamy behawioralnej używane przez tę witrynę mają na celu zapewnienie, że w miarę możliwości dostarczamy Ci najbardziej odpowiednie reklamy, anonimowo śledząc Twoje zainteresowania i prezentując podobne rzeczy, które mogą Cię zainteresować.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">Kilku partnerów reklamuje się w naszym imieniu, a śledzące pliki cookie podmiotów stowarzyszonych pozwalają nam po prostu sprawdzić, czy nasi klienci odwiedzili witrynę za pośrednictwem jednej z naszych witryn partnerskich, abyśmy mogli odpowiednio je zaksięgować i, w stosownych przypadkach, umożliwić naszym partnerom stowarzyszonym zapewnienie wszelkich premii, jakie mogą zapewnić Państwu dokonanie zakupu.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">Na tej stronie używamy również przycisków i/lub wtyczek mediów społecznościowych, które umożliwiają łączenie się z siecią społecznościową na różne sposoby. Aby działały, następujące serwisy społecznościowe, w tym Facebook, Google, ustawią pliki cookie za pośrednictwem naszej witryny, które mogą zostać wykorzystane do ulepszenia Twojego profilu na ich stronie lub wniesienia wkładu w dane, które przechowują, do różnych celów określonych w ich odpowiednich politykach prywatności.</p>
                        </li>

                    </ul>

                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Więcej informacji</p>
                    <p className="text-base md:text-lg mb-8">Mamy nadzieję, że to wyjaśniło Ci sprawę i jak wspomniano wcześniej, jeśli jest coś, czego nie jesteś pewien, czy potrzebujesz, czy nie, zwykle bezpieczniej jest pozostawić włączoną obsługę plików cookie na wypadek, gdyby wchodziła w interakcję z jedną z funkcji używanych w naszej witrynie.</p>
                    <p className="text-base md:text-lg mb-8">Aby uzyskać więcej ogólnych informacji na temat plików cookie, przeczytaj <Link className="text-purple-300" href="https://www.cookiepolicygenerator.com/sample-cookies-policy/" target='_blank'>artykuł o polityce plików Cookie</Link>.</p>
                    <p className="text-base md:text-lg mb-8">Jeśli jednak nadal szukasz więcej informacji, możesz skontaktować się z nami za pomocą jednej z naszych preferowanych metod kontaktu:</p>

                    <ul>
                        <li>Email: mateuszkrysiaczek@gmail.com</li>
                    </ul>

                </div>
            </XlContainer>
            <Footer />  
        </>            
    );
}
export default Cookie;  