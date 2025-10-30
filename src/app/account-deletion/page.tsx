import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exclusão de Conta - IBVI AI',
    description: 'Saiba como solicitar a exclusão permanente da sua conta IBVI AI e quais dados são removidos.'
};

const AccountDeletionPage = () => {
    return (
        <div className='container mx-auto max-w-4xl px-4 py-16 text-base leading-relaxed'>
            <header className='mb-12 space-y-3'>
                <h1 className='text-3xl font-semibold tracking-tight'>Exclusão de Conta - IBVI AI</h1>
                <p className='text-sm text-destructive'>
                    ⚠️ Atenção: A exclusão da conta é permanente e irreversível. Todos os seus dados serão removidos
                    definitivamente.
                </p>
            </header>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>O que será excluído</h2>
                <p>Ao excluir sua conta, as seguintes informações serão permanentemente removidas:</p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Perfil e dados cadastrais</li>
                    <li>Histórico de buscas e visualizações</li>
                    <li>Preferências e configurações</li>
                    <li>Todos os dados associados à sua conta</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>Como excluir sua conta</h2>

                <div className='space-y-2'>
                    <h3 className='font-semibold'>Método 1: Pelo aplicativo</h3>
                    <ol className='list-decimal space-y-2 pl-6'>
                        <li>Abra o aplicativo IBVI AI</li>
                        <li>Acesse o menu lateral (☰)</li>
                        <li>Vá em Configurações</li>
                        <li>Role até o final e toque em &quot;Excluir Conta&quot;</li>
                        <li>Confirme a exclusão</li>
                    </ol>
                </div>

                <div className='space-y-2'>
                    <h3 className='font-semibold'>Método 2: Por e-mail</h3>
                    <ol className='list-decimal space-y-2 pl-6'>
                        <li>Envie um e-mail para: contato@ibvi.com.br</li>
                        <li>Assunto: &quot;Solicitação de Exclusão de Conta - IBVI AI&quot;</li>
                        <li>
                            No corpo do e-mail, informe:
                            <ul className='mt-2 list-disc space-y-2 pl-6'>
                                <li>Seu nome completo</li>
                                <li>E-mail cadastrado no app</li>
                                <li>
                                    Confirmação: &quot;Solicito a exclusão permanente da minha conta&quot;
                                </li>
                            </ul>
                        </li>
                        <li>Aguarde confirmação (até 48h úteis)</li>
                    </ol>
                </div>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>Prazo de exclusão</h2>
                <p>
                    Sua conta será excluída em até 30 dias após a solicitação. Durante este período:
                </p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Sua conta ficará desativada</li>
                    <li>Você pode cancelar a solicitação entrando em contato conosco</li>
                    <li>Após 30 dias, a exclusão será permanente</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>Dados que permanecerão</h2>
                <p>Por obrigações legais, alguns dados podem ser mantidos por um período mínimo, incluindo:</p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>Dados necessários para cumprimento de obrigações fiscais e legais</li>
                    <li>Logs de acesso (formato anonimizado) para fins de segurança</li>
                    <li>Dados agregados e anonimizados para análises estatísticas</li>
                </ul>
            </section>

            <section className='space-y-3'>
                <h2 className='text-xl font-semibold'>Precisa de ajuda?</h2>
                <p>
                    Se você tiver dúvidas sobre o processo de exclusão de conta, entre em contato:
                </p>
                <ul className='list-disc space-y-2 pl-6'>
                    <li>
                        E-mail:{' '}
                        <a href='mailto:contato@ibvi.com.br' className='font-medium text-primary hover:underline'>
                            contato@ibvi.com.br
                        </a>
                    </li>
                    <li>
                        Website:{' '}
                        <a href='https://ibvi.com.br' className='font-medium text-primary hover:underline'>
                            ibvi.com.br
                        </a>
                    </li>
                </ul>
            </section>

            <footer className='mt-12 border-t pt-6 text-sm text-muted-foreground'>
                <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                    <Link href='/privacy-policy' className='font-medium text-primary hover:underline'>
                        Política de Privacidade
                    </Link>
                    <span>© 2025 MBRAS/IBVI. Todos os direitos reservados.</span>
                </div>
            </footer>
        </div>
    );
};

export default AccountDeletionPage;
