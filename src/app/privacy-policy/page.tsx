import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidade - IBVI AI',
    description:
        'Entenda como a IBVI AI coleta, utiliza, compartilha e protege seus dados pessoais, de acordo com a LGPD.'
};

const PrivacyPolicyPage = () => {
    return (
        <div className='container mx-auto max-w-4xl px-4 py-16 text-base leading-relaxed'>
            <header className='mb-12 space-y-3'>
                <h1 className='text-3xl font-semibold tracking-tight'>Política de Privacidade - IBVI AI</h1>
                <p className='text-sm text-muted-foreground'>Última atualização: 30 de outubro de 2025</p>
            </header>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>1. Introdução</h2>
                <p>
                    A MBRAS/IBVI (&quot;nós&quot;, &quot;nosso&quot; ou &quot;nos&quot;) opera o aplicativo IBVI AI. Esta
                    página informa sobre nossas políticas relacionadas à coleta, uso e divulgação de dados pessoais
                    quando você usa nosso serviço.
                </p>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>2. Dados Coletados</h2>
                <p>Coletamos os seguintes tipos de informações:</p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Dados de Cadastro: Nome, e-mail, telefone</li>
                    <li>Dados de Localização: Usamos sua localização para mostrar imóveis próximos</li>
                    <li>Dados de Uso: Informações sobre como você usa o aplicativo</li>
                    <li>Dados Técnicos: Tipo de dispositivo, sistema operacional, logs de erro</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>3. Como Usamos Seus Dados</h2>
                <p>Utilizamos os dados coletados para:</p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Fornecer e manter nosso serviço</li>
                    <li>Personalizar sua experiência</li>
                    <li>Mostrar imóveis relevantes baseados em sua localização</li>
                    <li>Melhorar nosso aplicativo</li>
                    <li>Enviar notificações importantes sobre o serviço</li>
                    <li>Analisar padrões de uso e corrigir erros</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>4. Compartilhamento de Dados</h2>
                <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto:</p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Com seu consentimento explícito</li>
                    <li>Para cumprir obrigações legais</li>
                    <li>Com prestadores de serviços (ex: Google Maps, Sentry) sob acordo de confidencialidade</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>5. Armazenamento e Segurança</h2>
                <p>
                    Seus dados são armazenados em servidores seguros e protegidos por criptografia. Implementamos
                    medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não
                    autorizado, alteração ou destruição.
                </p>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>6. Seus Direitos (LGPD)</h2>
                <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Acessar seus dados pessoais</li>
                    <li>Corrigir dados incompletos ou incorretos</li>
                    <li>Solicitar a exclusão de seus dados</li>
                    <li>Revogar seu consentimento</li>
                    <li>Solicitar a portabilidade dos dados</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>7. Retenção de Dados</h2>
                <p>
                    Mantemos seus dados pelo tempo necessário para fornecer nossos serviços ou conforme exigido por
                    lei. Você pode solicitar a exclusão de sua conta a qualquer momento através da página de exclusão
                    de conta.
                </p>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>8. Serviços de Terceiros</h2>
                <p>Nosso aplicativo utiliza os seguintes serviços de terceiros:</p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Google Maps: Para exibição de mapas e localização</li>
                    <li>Sentry: Para monitoramento de erros</li>
                    <li>Expo: Para atualizações e funcionalidades do app</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>9. Menores de Idade</h2>
                <p>
                    Nosso serviço não é direcionado a menores de 18 anos. Não coletamos intencionalmente informações
                    pessoais de menores.
                </p>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>10. Alterações nesta Política</h2>
                <p>
                    Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer
                    alterações publicando a nova política nesta página e atualizando a data de &quot;Última
                    atualização&quot;.
                </p>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>11. Contato</h2>
                <p>
                    Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail{' '}
                    <a href='mailto:contato@ibvi.com.br' className='font-medium text-primary hover:underline'>
                        contato@ibvi.com.br
                    </a>{' '}
                    ou acesse <a className='font-medium text-primary hover:underline' href='https://ibvi.com.br'>ibvi.com.br</a>.
                </p>
            </section>

            <footer className='mt-12 border-t pt-6 text-sm text-muted-foreground'>
                © 2025 MBRAS/IBVI. Todos os direitos reservados.
            </footer>
        </div>
    );
};

export default PrivacyPolicyPage;
